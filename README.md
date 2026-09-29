# Smart Todo Manager

A React task-management practice application with categories, priorities and task search.

**Stack:** React, JavaScript, CSS and Vite.

## Features

- Add tasks with descriptions.
- Choose Study, Work or Personal categories.
- Assign High, Medium or Low priority.
- Search by task name.
- Complete, undo or delete tasks.
- View total, completed and pending counts.
- Read and write task data using browser local storage.

## Run locally

```bash
git clone https://github.com/sangeethareddy9/react-todo-app.git
cd react-todo-app
npm ci
npm run dev
```

Use Node.js and npm, then open the local URL printed by Vite.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Build the app |
| `npm run preview` | Preview the build |
| `npm run lint` | Run ESLint |

## Source guide

| File | Responsibility |
| --- | --- |
| [src/TodoList.jsx](src/TodoList.jsx) | Task form, state, search and task actions |
| [src/App.jsx](src/App.jsx) | Application component |
| [src/App.css](src/App.css) | Application styling |
| [src/main.jsx](src/main.jsx) | React entry point |

## Learning focus

React components, `useState`, `useEffect`, controlled forms, conditional rendering and array operations.

## Current limitations

- Data is browser-local; there is no account or cloud synchronization.
- Filtered results currently pass their displayed index to task actions. Clear the search before deleting or completing a task to avoid changing the wrong item.
- Local-storage initialization and persistence need further validation before relying on the app for important tasks.

## Future improvements

Stable task IDs, more robust persistence, task editing, due dates and sorting.

## Author

[Sangeetha Chirla](https://github.com/sangeethareddy9)
