import { Building2, Check, Info, UserRound } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { siteContent } from "@/content/site-content";

type ServiceCardProps = {
  icon: typeof Building2;
  label: string;
  description: string;
  items: readonly string[];
  cta: string;
  scopeNote?: string;
};

function ServiceCard({
  icon: Icon,
  label,
  description,
  items,
  cta,
  scopeNote,
}: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col p-5 sm:p-7">
      <div className="flex size-11 items-center justify-center rounded-md bg-primary-light text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-headline text-on-surface">
        {label}
      </h3>
      <p className="mt-3 text-sm leading-6 text-on-surface-variant">
        {description}
      </p>

      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-6 text-on-surface"
          >
            <Check
              className="mt-1 size-4 shrink-0 text-secondary"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {scopeNote ? (
        <div className="mt-6 flex items-start gap-3 border-t border-outline pt-5 text-sm italic leading-6 text-on-surface-variant">
          <Info
            className="mt-1 size-4 shrink-0 text-on-surface-variant"
            aria-hidden="true"
          />
          <p>{scopeNote}</p>
        </div>
      ) : null}

      <Button href="#contacto" variant="secondary" className="mt-7 w-full sm:w-fit">
        {cta}
      </Button>
    </Card>
  );
}

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

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          <ServiceCard
            icon={Building2}
            label={services.business.label}
            description={services.business.description}
            items={services.business.items}
            cta={services.business.cta}
          />
          <ServiceCard
            icon={UserRound}
            label={services.individuals.label}
            description={services.individuals.description}
            items={services.individuals.items}
            cta={services.individuals.cta}
            scopeNote={services.individuals.scopeNote}
          />
        </div>
      </Container>
    </section>
  );
}
