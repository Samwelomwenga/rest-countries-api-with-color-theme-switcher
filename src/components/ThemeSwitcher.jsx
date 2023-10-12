import { useReducer, } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import switchThemeReducer from "../utils/functions/switchThemeReducer";

const initialState = {
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
};
console.log(initialState)
const ThemeSwitcher = () => {
  // useEffect(() => {
  // window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")
  // }, [])
  const [state, dispatch] = useReducer(switchThemeReducer, initialState);
  const handleThemeToggle = (event) => {
    dispatch({
      type: "SWITCH_THEME",
      payload: event.target.value === "on" ? "light" : "dark",
    });
    document.documentElement.classList.toggle("dark", state.theme === "dark");

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
