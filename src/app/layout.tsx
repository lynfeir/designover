import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import LenisProvider from "@/components/LenisProvider";
import SiteChrome from "@/components/SiteChrome";

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
  metadataBase: new URL("https://designoveratlanta.com"),
  title: "Design over Atlanta",
  description:
    "Custom websites from $399 in 48 hours. Business automation tools that eliminate manual work. We find what's costing you money and we kill it. Based in Atlanta, GA.",
  icons: {
    icon: "/logo-skyline.svg",
    shortcut: "/logo-skyline.png",
    apple: "/logo-skyline.png",
  },
  openGraph: {
    title: "Design over Atlanta",
    description:
      "Custom websites and automation, from $399 in 48 hours. Atlanta, GA.",
    url: "https://designoveratlanta.com",
    siteName: "Design over Atlanta",
    type: "website",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Design over Atlanta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design over Atlanta",
    description:
      "Custom websites and automation, from $399 in 48 hours. Atlanta, GA.",
    images: ["/og-banner.png"],
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
        <ViewTransitions>
          <LenisProvider>
            <SiteChrome>{children}</SiteChrome>
          </LenisProvider>
        </ViewTransitions>
      </body>
    </html>
  );
}
