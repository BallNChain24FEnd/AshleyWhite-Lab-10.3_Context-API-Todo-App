import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  // Change app theme
  return (
    <button className="theme-btn" onClick={() => {
      toggleTheme();
      console.log("Theme switched to:",
        theme === "light" ? "dark" : "light");
    }}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
