"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/cn";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const { header } = siteContent;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-outline bg-surface shadow-sm">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover sm:inline-flex"
          >
            {header.cta}
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-sm text-on-surface lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          </button>
        </div>
      </Container>

      <div
        id="menu-movil"
        className={cn(
          "border-t border-outline bg-surface lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm px-2 py-2.5 text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-2 rounded-sm bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            {header.cta}
          </a>
        </Container>
      </div>
    </header>
  );
}
