"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 glass shadow-subtle"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/doa-logo-transparent-square-1024.png"
              alt="Design Over Atlanta"
              width={36}
              height={36}
              className="brightness-0 invert transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>
          <span className="font-[family-name:var(--font-ui)] font-bold text-lg tracking-tight text-foreground">
            Design{" "}
            <span className="text-primary">over</span>{" "}
            Atlanta
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative px-4 py-2 font-[family-name:var(--font-ui)] text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 underline-draw ${
                  pathname === l.href
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-4">
            <Link
              href="/contact"
              className="btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold text-sm px-6 py-2.5 uppercase tracking-[0.1em] transition-transform hover:scale-105"
            >
              Get a Demo
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer relative z-60"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-foreground block"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-foreground block"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-foreground block"
          />
        </button>
      </div>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-2 z-50"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block text-3xl font-[family-name:var(--font-display)] font-semibold py-3 transition-colors ${
                    pathname === l.href
                      ? "text-primary"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold px-10 py-4 text-sm uppercase tracking-[0.15em] inline-block"
              >
                Get a Demo
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
