import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/cn";

const baseStyles =
  "inline-flex min-h-10 items-center justify-center rounded-sm px-5 py-2.5 text-center text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary:
    "border border-outline bg-transparent text-on-surface hover:border-primary",
} as const;

type ButtonVariant = keyof typeof variants;

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonLinkProps = SharedProps & {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

type ButtonElementProps = SharedProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type ButtonProps = ButtonLinkProps | ButtonElementProps;

function isButtonLink(props: ButtonProps): props is ButtonLinkProps {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary" } = props;
  const styles = cn(baseStyles, variants[variant], className);

  if (isButtonLink(props)) {
    return (
      <a
        className={styles}
        href={props.href}
        target={props.target}
        rel={props.rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={styles}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
}
