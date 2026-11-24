import {
  ArrowLeftRight,
  Briefcase,
  ClipboardCheck,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Card } from "@/components/ui/Card";
import { siteContent } from "@/content/site-content";

const serviceIcons = [
  Briefcase,
  ArrowLeftRight,
  ClipboardCheck,
  Cpu,
  ShieldCheck,
];

export function ServicesSection() {
  const { services } = siteContent;

  return (
    <section
      id="servicios"
      aria-labelledby="services-title"
      className="scroll-mt-16 border-b border-outline bg-surface-container py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {services.eyebrow}
          </p>
          <h2
            id="services-title"
            className="mt-4 text-3xl font-semibold leading-tight tracking-headline text-on-surface sm:text-4xl"
          >
            {services.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-on-surface-variant">
            {services.subtitle}
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-3xl rounded-md border border-outline bg-surface px-4 py-3 text-center text-sm leading-6 text-on-surface-variant shadow-sm">
          {services.scopeNote}
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, index) => {
            const Icon = serviceIcons[index] ?? Briefcase;
            return (
              <li key={item.title}>
                <Card className="h-full p-5 sm:p-6">
                  <span className="flex size-10 items-center justify-center rounded-sm bg-primary-light text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-headline text-on-surface">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                    {item.description}
                  </p>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
