import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setTheme("dark")
      : setTheme("light");
  }, []);
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <button className="flex gap-3" onClick={handleThemeToggle}>
      {theme ==='dark' ?<FontAwesomeIcon icon={faMoon} size="lg" />:<FontAwesomeIcon icon={faMoon} size="lg" style={{color: "#020c26",}} />}
      <p>Dark Mode</p>
    </button>
  );
};

export default ThemeSwitcher;
