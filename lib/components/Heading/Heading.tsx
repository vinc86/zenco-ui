import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type Level = "1" | "2" | "3" | "4" | "5" | "6";
type HeadingTag = `h${Level}`;

export type HeadingProps = {
  className?: string;
  children: ReactNode;
  level?: Level;
};

/**
 * Heading component for semantic HTML headings (h1-h6).
 *
 * @param props - The heading component props
 * @param props.level - The heading level (1-6), defaults to "1" for h1
 * @param props.children - The content to display inside the heading
 * @param props.className - Additional CSS classes to apply
 *
 * @example
 * ```tsx
 * <Heading level="1">Main Page Title</Heading>
 * <Heading level="2">Section Title</Heading>
 * <Heading level="3" className="...">Custom Styled Heading</Heading>
 * ```
 */

export function Heading({
  children,
  className,
  level = "1",
  ...props
}: HeadingProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >) {
  const Component = `h${level}` as HeadingTag;

  const headingSize = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-xl",
    4: "text-lg",
    5: "text-base",
    6: "text-sm",
  } as const;
  return (
    <Component className={cn(headingSize[level], className)} {...props}>
      {children}
    </Component>
  );
}
