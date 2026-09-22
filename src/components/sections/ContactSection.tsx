import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteContent } from "@/content/site-content";

export function ContactSection() {
  const { contact } = siteContent;
  const details = [
    {
      icon: MapPin,
      label: "Dirección",
      value: contact.officeDetails.address,
    },
    {
      icon: Mail,
      label: "Correo",
      value: contact.officeDetails.email,
      href: contact.officeDetails.email
        ? `mailto:${contact.officeDetails.email}`
        : undefined,
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: contact.officeDetails.phone,
    },
    {
      icon: Clock3,
      label: "Horario",
      value: contact.officeDetails.hours,
    },
  ].filter((item) => item.value);

  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="scroll-mt-16 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          id="contact-title"
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.subtitle}
        />

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
          <Card className="p-5 sm:p-6">
            <h3 className="text-lg font-semibold tracking-headline text-on-surface">
              {contact.officeLabel}
            </h3>
            <ul className="mt-5 space-y-4">
              {details.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-sm bg-primary-light text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-on-surface-variant">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm leading-6 text-on-surface transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm leading-6 text-on-surface">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Card>

          <Card className="p-5 sm:p-7">
            <ContactForm />
          </Card>
        </div>
      </Container>
    </section>
  );
}
