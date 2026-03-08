---
name: react-styled-component
description: Standardizes the creation of new React components using styled-components, following the project's folder structure in src/ui/.
---

# React Styled Component Skill

This skill ensures that all new UI components follow the project's consistent architecture.

## When to use this skill
- When creating a new UI component in `src/ui/`.
- When refactoring existing components to follow the styled-components pattern.

## How to use it

### Component Structure
Each component must live in its own directory within `src/ui/<ComponentName>/` with the following files:
1. `index.ts`: Handles exports.
2. `<ComponentName>.styles.ts`: Contains all `styled-components` definitions.
3. `<ComponentName>.tsx`: The functional React component.

### Naming Conventions
- Use PascalCase for directories and component files.
- Use `.styles.ts` suffix for style files.
- Styles should be exported as named constants (e.g., `export const Container = styled.div...`).

### Best Practices
- Use the theme defined in `src/core/theme` via the `theme` prop in styled-components.
- Avoid inline styles; prefer styled components.
- Export components via `index.ts` for cleaner imports:
  ```typescript
  export { default } from './ComponentName';
  export * from './ComponentName.styles';
  ```

## Example
Refer to `src/ui/Card/` for a reference implementation.
