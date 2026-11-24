import Image from "next/image";
import { BarChart3, Building2, FileCheck, Globe } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";

const badgeIcons = [FileCheck, BarChart3, Building2, Globe];

// Línea de crecimiento que se dibuja sobre la foto (decorativa).
const trendPoints =
  "0,220 80,205 160,214 240,180 320,192 400,150 480,162 560,118 640,130 720,92 800,104 880,60 960,72 1040,34 1120,44 1200,10";

export function Hero() {
  const { hero } = siteContent;

  return (
    <>
      <section
        id="inicio"
        className="relative isolate flex min-h-[min(100svh,64rem)] scroll-mt-16 items-center overflow-hidden bg-slate-950 pt-16"
      >
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/hero-panama-noche.jpg"
            alt="Vista nocturna de la Ciudad de Panamá y la Cinta Costera"
            fill
            priority
            sizes="100vw"
            className="hero-kenburns object-cover object-[60%_50%] saturate-[0.85]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-slate-950/80 to-transparent"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-slate-950/30 lg:hidden" />

        <svg
          aria-hidden="true"
          viewBox="0 0 1200 230"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 bottom-10 -z-10 h-40 w-full opacity-70 sm:h-56"
        >
          <polyline
            points={trendPoints}
            pathLength={1}
            fill="none"
            stroke="#60a5fa"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            className="hero-trend"
          />
        </svg>

        <Container className="w-full py-20 sm:py-24">
          <div className="hero-enter max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
              {hero.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-headline text-white sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              {hero.subtext}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#servicios">{hero.primaryCta}</Button>
              <Button href="#contacto" variant="inverse">
                {hero.secondaryCta}
              </Button>
            </div>
            <ul className="mt-10 flex max-w-xl flex-wrap gap-x-6 gap-y-2 border-t border-white/20 pt-6">
              {hero.facts.map((fact) => (
                <li key={fact} className="text-xs tracking-wide text-white/70">
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section aria-label="Garantías de servicio" className="border-b border-outline">
        <Container className="py-10 sm:py-12">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {hero.trustBadges.map((badge, index) => {
              const Icon = badgeIcons[index] ?? FileCheck;
              return (
                <li
                  key={badge.title}
                  className="flex items-start gap-3 rounded-md border border-outline bg-surface px-4 py-4 shadow-sm"
                >
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-sm bg-secondary-light text-secondary">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-on-surface">
                      {badge.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-5 text-on-surface-variant">
                      {badge.description}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </>
  );
}
