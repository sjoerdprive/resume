import type { ComponentProps } from "react";
import { classnames } from "~/shared/util";
import { listBaseClassName } from "./constants";

export function Ol({ children, className, ...olProps }: ComponentProps<"ol">) {
  return (
    <ol className={classnames(listBaseClassName, className)} {...olProps}>
      {children}
    </ol>
  );
}
