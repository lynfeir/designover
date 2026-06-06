import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/** Routes that require any authenticated user. */
const PROTECTED = ["/portal", "/admin"];

export async function updateSession(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // The /admin/notes subtree is a transparent rewrite to an external app
  // with its own auth — never gate it here.
  const isExternalAdmin = path.startsWith("/admin/notes");

  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // IMPORTANT: getUser() refreshes the auth token and must run on every
  // request between createServerClient and returning the response.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const needsAuth =
    !isExternalAdmin && PROTECTED.some((p) => path === p || path.startsWith(p + "/"));

  if (needsAuth && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", path);
    return NextResponse.redirect(url);
  }

  return response;
}
