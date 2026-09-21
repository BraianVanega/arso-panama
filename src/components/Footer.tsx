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
    <footer className="border-t border-outline/50 bg-surface">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold tracking-headline text-on-surface">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {column.items.map((item) => (
                  <li key={item}>
                    <a
                      href={hrefForFooterItem(item)}
                      className="text-sm text-on-surface-variant transition-colors hover:text-on-surface"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-outline/50 pt-6 text-center text-xs leading-5 text-on-surface-variant">
          {siteContent.footer.legalLine}
        </p>
      </Container>
    </footer>
  );
}
