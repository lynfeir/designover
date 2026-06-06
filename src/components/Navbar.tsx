"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "next-view-transitions";
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
  const overlayRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Accessible modal behaviour for the mobile overlay: lock scroll, focus the
  // first link, trap Tab, close on Escape, and restore focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        overlayRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        ) ?? []
      );

    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "Tab") {
        const items = focusables();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass shadow-subtle" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Design over Atlanta — home">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/doa-logo-transparent-square-1024.png"
              alt=""
              width={36}
              height={36}
              className="brightness-0 invert transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>
          <span className="font-[family-name:var(--font-ui)] font-bold text-lg tracking-tight text-foreground">
            Design <span className="text-primary">over</span> Atlanta
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
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
          <li className="ml-2">
            <Link
              href="/login"
              className="font-[family-name:var(--font-ui)] text-sm font-medium uppercase tracking-[0.15em] text-foreground/60 hover:text-primary transition-colors px-3 py-2 underline-draw"
            >
              Login
            </Link>
          </li>
          <li className="ml-1">
            <Link
              href="/start"
              className="btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold text-sm px-6 py-2.5 uppercase tracking-[0.1em] transition-transform hover:scale-105"
            >
              Start a Project
            </Link>
          </li>
        </ul>

        {/* Mobile toggle — 44px touch target, bars stay flush via negative margin */}
        <button
          ref={toggleRef}
          className="md:hidden flex flex-col items-end justify-center gap-[5px] cursor-pointer relative z-60 min-w-[44px] min-h-[44px] p-2.5 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
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
            ref={overlayRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-2 z-50"
          >
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
                  aria-current={pathname === l.href ? "page" : undefined}
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
              className="mt-6 flex flex-col items-center gap-4"
            >
              <Link
                href="/start"
                onClick={() => setOpen(false)}
                className="btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold px-10 py-4 text-sm uppercase tracking-[0.15em] inline-block"
              >
                Start a Project
              </Link>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-ui)] text-sm uppercase tracking-[0.15em] text-foreground/60 hover:text-primary transition-colors"
              >
                Client Login
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
