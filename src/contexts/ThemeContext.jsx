import { createContext, useContext, useEffect, useState } from "react";

// Create theme context
const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  // Restore saved theme
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light";
  });

  // Save theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Switch themes
  function toggleTheme() {
    setTheme(prev => prev === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Access theme context
export function useTheme() {
  return useContext(ThemeContext);
}
