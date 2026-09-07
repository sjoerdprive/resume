import type { ComponentProps } from "react";
import { classnames } from "~/shared/util";
import { listBaseClassName } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Ul({ children, className, ...ulProps }: ComponentProps<"ul">) {
  return (
    <ul className={classnames(listBaseClassName, className)} {...ulProps}>
      {children}
    </ul>
  );
}
