# ZENCO UI

A modern React component library built with TypeScript and Tailwind CSS for personal projects.

## Installation

```bash
npm install zenco-ui
```

## Usage

Import components and styles in your React application:

```jsx
import { Button, Heading } from "zenco-ui"
import "zenco-ui/styles.css" // Required: Import the styles

function App() {
  return (
    <div>
      <Heading level="1">Welcome to ZENCO UI</Heading>
      <Button 
        primary 
        size="large" 
        label="Get Started" 
        onClick={() => console.log('Clicked!')}
      />
    </div>
  )
}
```

### Heading

Semantic heading component supporting h1-h6 tags.

```jsx
import { Heading } from "zenco-ui"

<Heading level="1">Page Title</Heading>
<Heading level="2">Section Title</Heading>
<Heading level="3" className="custom-class">Subsection</Heading>
```

**Props:**
- `level?: "1" | "2" | "3" | "4" | "5" | "6"` - Heading level (default: "1")
- `children: ReactNode` - Heading content
- `className?: string` - Additional CSS classes

## Styling

This library uses Tailwind CSS. Make sure to import the styles:

```jsx
import "zenco-ui/styles.css"
```

You can override styles using Tailwind classes:

```jsx
<Button 
  primary 
  label="Custom Button" 
  className="!bg-red-500 hover:!bg-red-600" 
/>
```

## TypeScript

Full TypeScript support is included. All component props are properly typed.

## Development

```bash
# Install dependencies
npm install

# Start Storybook for development
npm run storybook

# Build the library
npm run build

# Run linter
npm run lint
```

## Requirements

- React ^19.1.1
- React DOM ^19.1.1
- Node.js 22+
