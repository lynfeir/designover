import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [55, 60, 75],
  },
  // Forwards designoveratlanta.com/admin/notes/* to the client-hub Vercel
  // deployment. Rewrites are transparent — the user's URL bar stays on
  // designoveratlanta.com, and cookies are scoped to this domain.
  async rewrites() {
    return [
      {
        source: "/admin/notes",
        destination: "https://psuh-tha-idea.vercel.app/admin/notes",
      },
      {
        source: "/admin/notes/:path*",
        destination: "https://psuh-tha-idea.vercel.app/admin/notes/:path*",
      },
    ];
  },
};

export default nextConfig;
