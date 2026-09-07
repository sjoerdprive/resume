import type { ComponentProps } from "react";
import { classnames } from "~/shared/util";

export function Section({
  children,
  className,
  ...sectionProps
}: ComponentProps<"section">) {
  return (
    <section className={classnames("flex flex-col gap-3 max-w-250", className)}>
      {children}
    </section>
  );
}
