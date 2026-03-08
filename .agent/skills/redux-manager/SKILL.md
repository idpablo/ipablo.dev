---
name: redux-manager
description: Assists in creating and managing Redux slices and actions in src/core/store/ using Redux Toolkit.
---

# Redux Manager Skill

This skill provides patterns for managing the application's global state using Redux Toolkit.

## When to use this skill
- When adding a new slice to the Redux store.
- When adding new actions or reducers to existing slices.
- When configuring the central store.

## How to use it

### Creating a Slice
Slices should be created in `src/core/store/` with the suffix `Slice.ts`.
1. Use `createSlice` from `@reduxjs/toolkit`.
2. Define an interface for the slice state.
3. Export actions and the reducer.

### Registering the Slice
After creating a slice, register it in `src/core/store/store.ts`:
1. Import the reducer.
2. Add it to the `reducer` object in `configureStore`.

## Best Practices
- Keep slices focused on a single domain (e.g., `theme`, `user`, `content`).
- Use `PayloadAction` for typed action payloads.
- Consider side effects (like `localStorage` updates) within or outside the slice as per project patterns (e.g., `themeSlice.ts`).

## Example
Refer to `src/core/store/themeSlice.ts` for a reference implementation.
