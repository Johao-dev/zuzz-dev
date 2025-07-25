import { useThemeContext } from "../hooks/useTheme.jsx";

function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="theme-toggle"
        className="sr-only"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label
        htmlFor="theme-toggle"
        className="relative inline-flex items-center cursor-pointer w-14 h-8 rounded-full transition-colors duration-200 ease-in-out bg-gray-200 dark:bg-gray-700"
      >
        <span
          className={`
            absolute left-1 top-1 w-6 h-6 rounded-full transition-transform duration-200 ease-in-out
            ${
              theme === "dark"
                ? "translate-x-6 bg-white"
                : "translate-x-0 bg-gray-600"
            }
            flex items-center justify-center
          `}
        >
          {theme === "dark" ? "🌜" : "🌞"}
        </span>
      </label>
    </div>
  );
}

export default ThemeToggle;