import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "Design over Atlanta",
  description:
    "Custom websites from $200, graphic design, and AI automation tools for businesses. Hosting from just $3/mo. Demo site before you pay. Based in Atlanta, GA.",
  icons: {
    icon: "/doa-logo-transparent-square-1024.png",
    shortcut: "/doa-logo-transparent-square-1024.png",
    apple: "/doa-logo-transparent-square-1024.png",
  },
  openGraph: {
    images: [{ url: "/doa-logo-transparent-square-1024.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body className="bg-bg-dark text-text-white antialiased">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
