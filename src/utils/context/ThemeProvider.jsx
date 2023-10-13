import propTypes from 'prop-types'
import {useReducer,useEffect,createContext,useContext} from 'react'
import switchThemeReducer from '../functions/switchThemeReducer'
const ThemeContext = createContext()

const initialState = {
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? ("dark"
        )
        : "light",
    };  
export const ThemeProvider = ({ children}) => {
    const [state, dispatch] = useReducer(switchThemeReducer, initialState);

    useEffect(() => {
        document.documentElement.classList.toggle("dark");
    }, [state.theme])
  return (
    <ThemeContext.Provider value={{state,dispatch}}>
      {children}
    </ThemeContext.Provider>
  ) 

  
}
export const useTheme = () => useContext(ThemeContext)
ThemeProvider.propTypes = {
    children: propTypes.node.isRequired,
  };

