import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import ScrollProgress from "@/components/ScrollProgress";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
  variable: "--font-ui",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Design over Atlanta",
  description:
    "Custom websites from $200 in 48 hours. Business automation tools that eliminate manual work. We find what's costing you money and we kill it. Based in Atlanta, GA.",
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
    <html
      lang="en"
      className={`${cormorant.variable} ${syne.variable} ${dmMono.variable}`}
    >
      <body className="bg-background text-text-body antialiased">
        <LenisProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
