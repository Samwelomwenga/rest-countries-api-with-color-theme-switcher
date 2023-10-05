import { useRef,  } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const ThemeSwitcher = () => {
  const themeRef=useRef(null)
  
    themeRef.current=window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
      document.documentElement.classList.toggle("dark",themeRef.current==="dark")
  
 
  const handleThemeToggle = () => {
    const newTheme=themeRef.current==="dark"?"light":"dark";
    themeRef.current=newTheme;
    document.documentElement.classList.toggle("dark",newTheme==="dark");
  }
  return (
    <button className="flex gap-3" onClick={handleThemeToggle}>
      {themeRef.current ==='dark' ?<FontAwesomeIcon icon={faMoon} size="lg" />:<FontAwesomeIcon icon={faMoon} size="lg" style={{color: "#020c26",}} />}
      <p>{themeRef.current==="dark"?"dark":"light"} Mode</p>
    </button>
  );
};

export default ThemeSwitcher;
