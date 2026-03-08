---
name: portfolio-manager
description: Assists in managing and updating portfolio data, including project descriptions and profile statistics in the src/data/ directory.
---

# Portfolio Manager Skill

This skill provides guidelines and patterns for updating the portfolio's static data.

## When to use this skill
- When adding a new project to the portfolio.
- When updating project descriptions or details.
- When refreshing profile statistics or metrics.

## How to use it

### Updating Projects
Project data is located in `src/data/projectDescriptions.ts`. When adding or editing:
1. Ensure the project object follows the established TypeScript interface.
2. Use descriptive and concise text for project summaries.
3. Keep the ordering consistent with social or chronological importance.

### Updating Statistics
Profile statistics are in `src/data/profileStats.ts`. 
1. Validate that values are up-to-date with external sources (GitHub, LinkedIn, etc.).
2. Use the correct icons from the project's icon set.

## Best Practices
- Always verify the syntax and types in the TypeScript data files.
- Keep data structured and easy to read.
