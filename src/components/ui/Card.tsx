import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div" | "aside";
};

export function Card({
  as: Tag = "article",
  className,
  ...props
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-md border border-outline bg-surface shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
