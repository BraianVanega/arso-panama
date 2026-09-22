import {
  BarChart3,
  Globe,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/Card";
import { siteContent } from "@/content/site-content";

const growthIcons = [Target, TrendingUp, Workflow, Globe, BarChart3];

export function GrowthAreasSection() {
  const { growthAreas } = siteContent;

  return (
    <section
      id="alcance"
      aria-labelledby="growth-title"
      className="scroll-mt-16 border-b border-outline bg-surface-container py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          id="growth-title"
          eyebrow={growthAreas.eyebrow}
          title={growthAreas.title}
          description={growthAreas.subtitle}
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {growthAreas.items.map((item, index) => {
            const Icon = growthIcons[index] ?? Target;
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
          {growthAreas.disclaimer}
        </p>
      </Container>
    </section>
  );
}
