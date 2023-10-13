import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import { useTheme } from "../utils/context/ThemeProvider";



const ThemeSwitcher = () => {
  const {state,dispatch}=useTheme()
  
  const handleThemeToggle = (event) => {
    dispatch({
      type: "SWITCH_THEME",
      payload: event.target.value === "on" ? "light" : "dark",
    });

  };
  return (
    <>
      <label htmlFor="themeToggle" className="relative">
        <input
          // className="hidden"
          type="checkbox"
          value={state.theme === "dark" ? "on" : "off"}
          id="themeToggle"
          onChange={handleThemeToggle}
          checked={state.theme === "dark"}
        />
        <FontAwesomeIcon
          icon={faMoon}
          size="xl"
          className="absolute top-0 left-0"
        />
      </label>
    </>
  );
};

export default ThemeSwitcher;
