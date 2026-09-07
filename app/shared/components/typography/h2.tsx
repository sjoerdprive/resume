import type { ComponentProps } from "react";
import { classnames } from "~/shared/util";

export function H2({ children, className, ...props }: ComponentProps<"h2">) {
  return (
    <h2 className={classnames("text-xl font-semibold", className)} {...props}>
      {children}
    </h2>
  );
}
