"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 min-h-[72px] flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-bg-dark/95 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-bg-dark/80 backdrop-blur-md border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-text-white">
          <img src="/logo.png" alt="DOA Logo" width={36} height={36} className="rounded-lg" />
          Design <span className="gradient-text">over</span> Atlanta
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname === l.href
                    ? "text-text-white bg-white/[0.08]"
                    : "text-text-muted hover:text-text-white hover:bg-white/[0.05]"
                }`}
              >
                {l.label}
                {pathname === l.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full gradient-cta" />
                )}
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <Link
              href="/contact"
              className="gradient-cta text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(233,30,140,0.25)]"
            >
              Get a Demo
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-text-white rounded transition-all ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-text-white rounded transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-text-white rounded transition-all ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-bg-dark/98 backdrop-blur-xl flex flex-col items-center pt-10 gap-2 z-50">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-lg font-medium px-6 py-3 rounded-lg transition-all ${
                pathname === l.href
                  ? "text-text-white bg-white/[0.08]"
                  : "text-text-muted hover:text-text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 gradient-cta text-white font-semibold px-8 py-3 rounded-lg transition-all"
          >
            Get a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
