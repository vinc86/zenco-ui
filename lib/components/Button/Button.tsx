// shape = square, rounded, circle
// color = blu , green, blue
// design = ghost, outline, filled
// size = small, medium, large
// isLoading = true/false
// shape = square, rounded, circle
// color = blu , green, blue
// design = ghost, outline, filled
// size = small, medium, large
// isLoading = true/false
import type { ReactNode } from "react";
import { Spinner } from "../Spinner";

export type ButtonProps = {
  /** Whether the button is in a loading state */
  isLoading?: boolean;
  /** Text to display when loading, defaults to "Loading..." */
  loadingText?: string;
  /** Font size of the button text */
  fontSize?: "medium" | "large" | "extra";
  /** Color theme of the button */
  color?: "red" | "blue" /* | "green" | "gray" */;
  /** Visual style variant of the button */
  design?: "outline" | "ghost" | "filled";
  /** Border radius style of the button */
  shape?: "square" | "rounded" | "circle";
  /** Size of the button affecting padding */
  size?: "small" | "medium" | "large";
  /** Button content */
  children: ReactNode;
};

/**
 * Versatile Button component with multiple styling options and loading states.
 *
 * @param props - The button component props
 * @param props.color - Color theme: "red" | "blue" (defaults to "blue")
 * @param props.design - Visual style: "filled" | "outline" | "ghost" (defaults to "filled")
 * @param props.shape - Border radius: "square" | "rounded" | "circle" (defaults to "rounded")
 * @param props.size - Padding size: "small" | "medium" | "large" (defaults to "medium")
 * @param props.fontSize - Text size: "medium" | "large" | "extra" (defaults to "medium")
 * @param props.isLoading - Shows spinner and disables interaction when true
 * @param props.loadingText - Text shown during loading state (defaults to "Loading...")
 * @param props.children - Button content (text, icons, etc.)
 *
 * @example
 * ```tsx
 * // Basic button
 * <Button>Click me</Button>
 *
 * // Styled button
 * <Button color="red" design="outline" size="large">
 *   Delete Item
 * </Button>
 *
 * // Loading button
 * <Button isLoading={true} loadingText="Saving...">
 *   Save Changes
 * </Button>
 *
 * // Custom shape
 * <Button shape="circle" size="small">
 *   +
 * </Button>
 * ```
 */

export function Button({
  color = "blue",
  design = "filled",
  shape = "rounded",
  size = "medium",
  fontSize = "medium",
  loadingText = "Loading...",
  isLoading,
  children,
  ...props
}: ButtonProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) {
  const fontSizes = {
    medium: "text-md",
    large: "text-lg",
    extra: "text-2xl",
  };

  const buttonShapes = {
    square: "rounded-none",
    rounded: "rounded-md",
    circle: "rounded-full",
  };

  const buttonSizes = {
    small: "py-1 px-3",
    medium: "py-2 px-4",
    large: "py-3 px-10",
  };

  const buttonDesignStyle = {
    red: {
      filled: "bg-red-700 text-white hover:bg-red-500",
      ghost: "text-red-700 font-bold bg-none hover:bg-red-200",
      outline:
        "border-2 bg-red-200 text-red-800 border-red-700 hover:bg-red-700 hover:text-white",
    },
    blue: {
      filled: "bg-blue-700 text-white hover:bg-blue-500",
      ghost: "text-blu -700 font-bold bg-none hover:bg-blu -200",
      outline:
        "border-2 bg-blue-200 text-blue-800 border-blue-700 hover:bg-blue-700 hover:text-white",
    },
    /* 
    green: {
      filled: "bg-green-700 text-white hover:bg-green-500",
      ghost: "",
      outline: ""
    },
    gray: {
      filled: "bg-gray-700 text-white hover:bg-gray-500",
      ghost: "",
      outline: ""
    } */
  };

  const buttonStyle = buttonDesignStyle[color]?.[design] || "";
  return (
    <button
      disabled={isLoading}
      className={`flex transition h-fit w-fit text-bold cursor-pointer text-md
        ${buttonStyle}
        ${buttonSizes[size]}
        ${fontSizes[fontSize]}
        ${buttonShapes[shape]}
        `}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex justify-center items-center gap-3">
          <Spinner /> {loadingText}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
