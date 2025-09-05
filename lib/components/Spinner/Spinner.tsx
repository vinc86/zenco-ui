/**
 * Animated loading spinner component with multiple rotating rings.
 *
 * Features a layered design with different shades of blue rotating at different speeds
 * to create a smooth, visually appealing loading indicator.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Spinner />
 *
 * // In a loading button
 * <Button isLoading={true}>
 *   <Spinner /> Loading...
 * </Button>
 *
 * // In a loading state
 * {isLoading ? <Spinner /> : <Content />}
 * ```
 */
export function Spinner() {
  return (
    <div className="relative w-6 h-6 rounded-full">
      <div className="absolute top-0 left-0 rounded-full border-3 w-full h-full border-blue-200"></div>
      <div className="absolute top-0 left-0 transform animate-spin rotate-45 w-full h-full border-blue-900 rounded-full border-3 border-b-transparent border-x-transparent"></div>
      <div className="absolute top-0 left-0 transform animate-spin-1/2 rotate-90 w-full h-full border-blue-600 rounded-full border-3 border-b-transparent border-x-transparent"></div>
      <div className="absolute top-0 left-0 transform animate-spin-0/9 rotate-180 w-full h-full border-blue-400 rounded-full border-3 border-b-transparent border-x-transparent"></div>
    </div>
  );
}
