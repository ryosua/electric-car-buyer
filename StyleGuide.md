# Style Guide

## React Components

### Component Structure

- Use arrow function components with explicit type definitions
- Define Props interface/type separately above the component
- Use implicit returns for simple components
- Export components as default at the bottom of the file

```typescript
type Props = {
  someProperty: string;
  children?: React.ReactNode;
};

const MyComponent = ({ someProperty, children }: Props) => (
  <div>{children}</div>
);

export default MyComponent;
```

### File Organization

- One component per file
- File name should match component name (PascalCase)
- Group related components in feature-specific directories
- Keep shared/common components in a shared directory

### TypeScript

- Always define prop types explicitly
- Use type for simple prop definitions, interface for extendable ones
- Use React.ReactNode for children props
- Export types/interfaces if they're used across multiple files

### Client/Server Components

- Use 'use client' directive only when component needs client-side features
- Keep server components as the default when possible
- Separate client-side logic into dedicated components (like ThemeRegistry)
- Document the reason for client components in comments

### Imports

- Group imports in the following order:
  1. React and Next.js imports
  2. Third-party libraries
  3. Local components
  4. Types/interfaces
  5. Utilities/helpers
  6. Styles/assets

### Comments

- Add JSDoc comments for components that need explanation
- Document complex logic or business rules
- Explain why a component needs to be client-side when using 'use client'

### Example

```typescript
"use client"; // Only if needed

/**
 * Component description
 * Explain any complex logic or important notes
 */
import { useState } from "react";
import { SomeThirdPartyComponent } from "some-library";
import { LocalComponent } from "./LocalComponent";
import type { SharedType } from "../types";
import { utilityFunction } from "../utils";

type Props = {
  requiredProp: string;
  optionalProp?: number;
  children?: React.ReactNode;
};

const ComponentName = ({ requiredProp, optionalProp = 0, children }: Props) => (
  <div>{children}</div>
);

export default ComponentName;
```
