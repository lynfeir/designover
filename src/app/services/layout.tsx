import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Design over Atlanta",
  description:
    "Custom websites from $399 delivered in 48 hours, plus business automation tools that eliminate manual work. Free demo before you pay.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
