import {
  Activity,
  Settings,
  Shield,
  TrendingDown,
  Users,
} from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/Card";
import { siteContent } from "@/content/site-content";

const riskIcons = [TrendingDown, Users, Settings, Activity, Shield];

export function RiskArchitectureSection() {
  const { riskManagement } = siteContent;

  return (
    <section
      id="riesgos"
      aria-labelledby="risks-title"
      className="scroll-mt-16 border-b border-outline bg-surface-container py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          id="risks-title"
          eyebrow={riskManagement.eyebrow}
          title={riskManagement.title}
          description={riskManagement.subtitle}
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskManagement.items.map((item, index) => {
            const Icon = riskIcons[index] ?? Shield;
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

        <p className="mt-8 rounded-md border border-outline bg-surface px-5 py-4 text-sm leading-6 text-on-surface shadow-sm">
          {riskManagement.disclaimer}
        </p>
      </Container>
    </section>
  );
}
