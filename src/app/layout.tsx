import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Design over Atlanta — Websites, Design & AI Tools for Business",
  description:
    "Custom websites from $200, graphic design, and AI automation tools for businesses. Hosting from just $3/mo. Demo site before you pay. Based in Atlanta, GA.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg-dark text-text-white antialiased">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
