# Lab 10.3 — FocusFlow Todo App

A responsive React Todo application using the Context API.

## Features

1. Add, edit, delete, and complete todos.
2. Filter by All, Active, and Completed.
3. Switch between light and dark themes.
4. Save todos and theme with localStorage.

## Technologies

- React (JavaScript/JSX)
- Vite
- Context API
- CSS
- localStorage

## Getting Started

`npm install`
`npm run dev`

## Build

`npm run build`

## Contexts

- TodoContext: Manages todo actions and persistence.
- FilterContext: Controls visible tasks.
- ThemeContext: Manages light and dark mode.

## Reflection

**Why use Context API?**

Context allows components to share state without passing props through every component.

**How is state updated?**

React updater functions create new arrays and objects without directly changing existing state.

**How is data saved?**

useEffect saves changes to localStorage, and useState restores saved data when the app loads.

**How is performance considered?**

useMemo and useCallback help stabilize context values and functions.

## Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Google Search](https://www.google.com/)
```
