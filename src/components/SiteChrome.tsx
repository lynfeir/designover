"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CinematicFX from "@/components/CinematicFX";

/** Routes that own their full-screen layout — no marketing nav/footer. */
const BARE = ["/login", "/portal", "/admin"];

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
      <CinematicFX />
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
