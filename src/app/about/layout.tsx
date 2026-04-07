import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Design over Atlanta",
  description:
    "Meet Hunter Weeks — carpenter turned coder. Custom websites from $200 and business automation tools that eliminate manual work. Based in Atlanta, GA.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
