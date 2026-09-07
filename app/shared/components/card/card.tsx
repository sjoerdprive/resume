import type { ComponentProps } from "react";
import { classnames } from "~/shared/util";

export function Card({
  children,
  className,
  ...divProps
}: ComponentProps<"div">) {
  return (
    <div
      className={classnames(
        "flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:border-t-gray-600 dark:border-b-gray-800",
        className,
      )}
      {...divProps}
    >
      {children}
    </div>
  );
}
