import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type Props = {
  className?: string;
  children: ReactNode;
};
export function Title({
  children,
  className,
  ...props
}: Props &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >) {
  return (
    <h1 className={cn("text-3xl", className)} {...props}>
      {children}
    </h1>
  );
}
