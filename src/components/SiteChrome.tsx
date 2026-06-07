"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CinematicFX from "@/components/CinematicFX";

/** Routes that own their full-screen layout — no marketing nav/footer. */
const BARE = ["/login", "/portal", "/admin", "/forgot", "/reset"];

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const bare = BARE.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  if (bare) return <>{children}</>;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-background focus:font-[family-name:var(--font-ui)] focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>
      <CinematicFX />
      <ScrollProgress />
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer />
    </>
  );
}
