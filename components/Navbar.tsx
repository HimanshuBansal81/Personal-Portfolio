"use client";

import Container from "@/components/Container";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111d]/72 backdrop-blur-2xl">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="theme-link text-lg font-semibold tracking-[0.18em] text-white no-underline"
        >
          HIMANSHU BANSAL
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navigationLinks.map((link) => {
            const isActive = isActivePath(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-sky-100 to-blue-200 text-slate-950 shadow-[0_10px_24px_rgba(42,95,173,0.28)]"
                    : "text-zinc-400 hover:bg-white/5 hover:text-sky-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:border-sky-200/30 hover:bg-sky-300/10 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="relative h-4 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition duration-300 ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-4 rounded-full bg-current transition duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-4 rounded-full bg-current transition duration-300 ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#07111d]/92 transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-2 py-4">
          {navigationLinks.map((link) => {
            const isActive = isActivePath(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-sky-100 to-blue-200 text-slate-950 shadow-[0_10px_24px_rgba(42,95,173,0.24)]"
                    : "text-zinc-300 hover:bg-white/5 hover:text-sky-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </Container>
      </div>
    </header>
  );
}
