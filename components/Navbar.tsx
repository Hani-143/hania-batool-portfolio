"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, nav } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md border-b border-champagne/20 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-8xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-xl tracking-wide text-charcoal focus-ring"
          aria-label={`${brand.name} — home`}
        >
          <span className="border border-champagne w-9 h-9 flex items-center justify-center text-sm">
            {brand.monogram}
          </span>
          <span className="hidden sm:inline">{brand.name.toUpperCase()}</span>
        </a>

        <ul className="hidden md:flex items-center gap-9 label text-charcoal/80">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-champagne transition-colors focus-ring"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block label border border-charcoal px-5 py-3 hover:bg-charcoal hover:text-ivory transition-colors focus-ring"
        >
          Let&apos;s Work Together
        </a>

        <button
          className="md:hidden text-charcoal focus-ring"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ivory border-t border-champagne/20 px-6 py-8">
          <ul className="flex flex-col gap-6 label text-charcoal">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block border border-charcoal px-5 py-3 focus-ring"
              >
                Let&apos;s Work Together
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
