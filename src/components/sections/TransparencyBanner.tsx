import { FileCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { siteContent } from "@/content/site-content";

export function TransparencyBanner() {
  const { transparencyBanner } = siteContent;

  return (
    <section
      id="transparencia"
      aria-labelledby="transparency-title"
      className="scroll-mt-16 border-b border-outline py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="rounded-lg border border-primary bg-primary-light p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-surface text-primary">
              <FileCheck className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p
                id="transparency-title"
                className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
              >
                {transparencyBanner.label}
              </p>
              <p className="mt-4 max-w-4xl text-base leading-7 text-on-surface sm:text-lg">
                {transparencyBanner.text}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
