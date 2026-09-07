import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ComponentProps } from "react";
import { classnames } from "~/shared/util";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

export function Item({
  children,
  className,
  ...liProps
}: ComponentProps<"li">) {
  return (
    <li
      className={classnames("py-1 flex items-start gap-2", className)}
      {...liProps}
    >
      <FontAwesomeIcon
        icon={faArrowAltCircleRight}
        className="text-primary-500"
      />

      {children}
    </li>
  );
}
