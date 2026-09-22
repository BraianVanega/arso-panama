import Image from "next/image";
import { Container } from "@/components/Container";
import { siteContent } from "@/content/site-content";

function hrefForFooterItem(item: string) {
  if (item.includes("@")) {
    return `mailto:${item}`;
  }

  switch (item) {
    case "Nosotros":
    case "Cuerpo Consultor":
      return "#nosotros";
    case "Cumplimiento":
    case "Aviso de Privacidad":
    case "Términos de Uso":
      return "#cumplimiento";
    case "Servicios para Empresas":
    case "Servicios para Personas Naturales":
      return "#servicios";
    default:
      return "#contacto";
  }
}

export function Footer() {
  const columns = siteContent.footer.columns.filter(
    (column) => column.items.length > 0,
  );

  return (
    <footer className="border-t border-outline bg-surface">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column, index) => (
            <div key={column.title}>
              {index === 0 ? (
                <div className="mb-4">
                  <Image
                    src="/images/logo-mark.png"
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 object-contain"
                  />
                </div>
              ) : null}
              <h2 className="text-sm font-semibold tracking-headline text-on-surface">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {column.items.map((item) => (
                  <li key={item}>
                    <a
                      href={hrefForFooterItem(item)}
                      className="text-sm text-on-surface-variant transition-colors hover:text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-outline pt-6 text-center text-xs leading-5 text-on-surface-variant">
          {siteContent.footer.legalLine}
        </p>
      </Container>
    </footer>
  );
}
