# ZENCO UI

A modern React component library built with TypeScript and Tailwind CSS for personal projects.

## Installation

```bash
npm install zenco-ui
```

## Usage

Import components and styles in your React application:

```jsx
import { Button, Heading, Spinner } from "zenco-ui"
import "zenco-ui/styles.css" // Required: Import the styles

function App() {
  return (
    <div>
      <Heading level="1">Welcome to ZENCO UI</Heading>
      <Button 
        color="blue"
        design="filled" 
        size="large" 
        onClick={() => console.log('Clicked!')}
      >
        Get Started
      </Button>
    </div>
  )
}
```

## Components

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
- `children` - Text content for the heading

## Button

A versatile button component with multiple design systems, supporting various visual styles and interaction states.

### Usage

```jsx
import { Button } from "zenco-ui"

// Basic usage
<Button onClick={handleClick}>
  Click me
</Button>

// Customized button
<Button 
  color="blue"
  design="filled"
  size="large"
  shape="rounded"
  loading={isLoading}
  disabled={isDisabled}
  onClick={handleClick}
>
  Submit
</Button>
```

### Props

- `design?: "filled" | "outline" | "ghost"` - Button design variant (default: "filled")
- `color?: "blue" | "red" | "green" | "yellow" | "gray"` - Button color (default: "blue")

> **Note:** Additional color variants are currently in development.

- `size?: "small" | "medium" | "large"` - Button size (default: "medium")  
- `shape?: "square" | "rounded" | "pill"` - Button corner style (default: "rounded")
- `loading?: boolean` - Shows loading spinner and disables interaction (default: false)
- `disabled?: boolean` - Disables the button (default: false)
- `onClick?: () => void` - Click event handler
- `children` - Button content (text, icons, etc.)

## Spinner

A loading indicator component that provides visual feedback during asynchronous operations.

### Usage

```jsx
import { Spinner } from "zenco-ui"

// Basic usage
<Spinner />

// In a button
<Button loading>
  Loading...
</Button>
```

### Props

- `className?: string` - Additional CSS classes for custom styling
- Standard HTML div attributes are also supported

## Styling

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
