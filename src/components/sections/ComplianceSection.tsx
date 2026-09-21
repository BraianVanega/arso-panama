import { Eye, FileCheck, ScanSearch, ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/Card";
import { siteContent } from "@/content/site-content";

const complianceIcons = [FileCheck, ScanSearch, ShieldCheck, Eye];

export function ComplianceSection() {
  const { compliance } = siteContent;

  return (
    <section
      id="cumplimiento"
      aria-labelledby="compliance-title"
      className="scroll-mt-16 border-b border-outline/40 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          id="compliance-title"
          eyebrow={compliance.eyebrow}
          title={compliance.title}
          description={compliance.intro}
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {compliance.items.map((item, index) => {
            const Icon = complianceIcons[index] ?? ShieldCheck;
            return (
              <li key={item.title}>
                <Card className="h-full p-5 sm:p-6">
                  <span className="flex size-10 items-center justify-center rounded-sm bg-surface-container-high text-primary-light">
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
