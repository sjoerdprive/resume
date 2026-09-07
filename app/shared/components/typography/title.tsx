import type { ComponentProps } from "react";
import { classnames } from "~/shared/util";

export function Title({
  children,
  className,
  ...h1Props
}: ComponentProps<"h1">) {
  return (
    <h1
      className={classnames("text-4xl font-semibold", className)}
      {...h1Props}
    >
      {children}
    </h1>
  );
}
