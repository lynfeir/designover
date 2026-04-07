"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/30 pt-20 pb-10 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 flicker-grid pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/doa-logo-transparent-square-1024.png"
                alt="Design Over Atlanta"
                width={32}
                height={32}
                className="brightness-0 invert"
              />
              <h4 className="font-[family-name:var(--font-ui)] font-bold text-lg text-foreground">
                Design <span className="text-primary">over</span> Atlanta
              </h4>
            </div>
            <p className="text-muted-fg text-sm leading-relaxed mb-5">
              Custom websites from $399 and business automation tools that
              eliminate manual work. We find what&apos;s costing you money and we
              kill it.
            </p>
            <a
              href="tel:4707583549"
              className="text-primary font-[family-name:var(--font-mono)] font-semibold text-base inline-block mb-3 hover:text-primary-hover transition-colors"
            >
              (470) 758-3549
            </a>
            <p className="text-sm text-muted-fg">
              <strong className="text-foreground">Hunter Weeks</strong>
              <br />
              Founder &amp; Builder
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <h4 className="font-[family-name:var(--font-ui)] text-xs font-bold tracking-[0.25em] uppercase text-foreground mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/services#websites", label: "Custom Websites" },
                { href: "/services#automation", label: "Business Automation" },
                { href: "/services#design", label: "Graphic Design" },
                { href: "/services#plans", label: "Monthly Plans" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted-fg hover:text-primary transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <h4 className="font-[family-name:var(--font-ui)] text-xs font-bold tracking-[0.25em] uppercase text-foreground mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/contact#demo", label: "Get a Demo" },
                { href: "/terms", label: "Terms of Service" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-muted-fg hover:text-primary transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <h4 className="font-[family-name:var(--font-ui)] text-xs font-bold tracking-[0.25em] uppercase text-foreground mb-5">
              Hours
            </h4>
            <p className="text-muted-fg text-sm leading-relaxed">
              Mon &ndash; Fri: 9 AM &ndash; 7 PM
              <br />
              Sat: 10 AM &ndash; 4 PM
              <br />
              Sun: By appointment
            </p>
            <p className="text-muted-fg text-sm mt-4">
              Serving clients worldwide
              <br />
              Based in Atlanta, GA
            </p>
          </motion.div>
        </div>

        <div className="border-t border-border/30 pt-8 text-center font-[family-name:var(--font-mono)] text-muted-fg text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Design over Atlanta. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
