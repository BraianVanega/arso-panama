import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="mt-4 text-3xl font-semibold leading-tight tracking-headline text-on-surface sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-on-surface-variant">
          {description}
        </p>
      ) : null}
    </div>
  );
}
