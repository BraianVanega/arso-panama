import { siteContent } from "@/content/site-content";

export function Logo() {
  const { header } = siteContent;

  return (
    <a href="#inicio" className="flex items-center gap-3 no-underline">
      <span
        className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-surface-container-high text-[11px] font-semibold tracking-wide text-primary-light"
        aria-hidden="true"
      >
        AS
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface">
          {header.brandName}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-on-surface-variant">
          {header.tagline}
        </span>
      </span>
    </a>
  );
}
