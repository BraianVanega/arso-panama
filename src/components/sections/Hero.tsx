import Image from "next/image";
import {
  BarChart3,
  Building2,
  FileCheck,
  Globe,
} from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const badgeIcons = [FileCheck, BarChart3, Building2, Globe];

export function Hero() {
  const { hero } = siteContent;

  return (
    <section id="inicio" className="scroll-mt-16 border-b border-outline pt-16">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div>
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-headline text-on-surface sm:text-5xl">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-on-surface-variant sm:text-lg">
              {hero.subtext}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="#servicios"
              >
                {hero.primaryCta}
              </Button>
              <Button
                href="#contacto"
                variant="secondary"
              >
                {hero.secondaryCta}
              </Button>
            </div>
          </div>

          <Card as="aside" className="overflow-hidden rounded-lg">
            <div className="relative aspect-video bg-surface-container">
              <Image
                src="/images/sede-placeholder.svg"
                alt="Imagen institucional de ARSOPA Solutions S.A. (placeholder)"
                fill
                priority
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-sm font-semibold text-on-surface">{hero.entityCard.title}</p>
              <ul className="mt-3 space-y-1.5">
                {hero.entityCard.details.map((detail) => (
                  <li key={detail} className="text-sm leading-6 text-on-surface-variant">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
                  <span className="block text-sm font-semibold text-on-surface">{badge.title}</span>
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
  );
}
