import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/Card";
import { siteContent } from "@/content/site-content";

export function MethodologySection() {
  const { methodology } = siteContent;

  return (
    <section
      id="metodologia"
      aria-labelledby="methodology-title"
      className="scroll-mt-16 border-b border-outline py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          id="methodology-title"
          eyebrow={methodology.eyebrow}
          title={methodology.title}
          description={methodology.subtitle}
        />

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {methodology.steps.map((step) => (
            <li key={step.number}>
              <Card className="h-full p-5 sm:p-6">
                <span className="block text-3xl font-semibold tracking-headline text-primary">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-headline text-on-surface">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                  {step.description}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
