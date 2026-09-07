import type { ComponentProps } from "react";
import { classnames } from "~/shared/util";

export function H3({ children, className, ...props }: ComponentProps<"h3">) {
  return (
    <h3 className={classnames("text-lg font-semibold", className)} {...props}>
      {children}
    </h3>
  );
}
