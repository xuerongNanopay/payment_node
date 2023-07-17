// Persist Theme to localStorage. (Remember Theme)
// This ThemeContext only response to pick different theme that defined in side contants.
// The really style theme is MUITheme.
import { useState, useEffect, createContext } from 'react';

import { THEMES } from '../constants'

const INITIAL_STATE = {
  theme: THEMES.DEFAULT,
  setTheme: (theme) => {}
}

const ThemeContext = createContext(INITIAL_STATE);

function ThemeProvider({ children }) {
  console.log(INITIAL_STATE.theme)
  const [theme, _setTheme] = useState(INITIAL_STATE.theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if ( !!storedTheme ) _setTheme(JSON.parse(storedTheme));
  }, []);

  const setTheme = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme));
    _setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext };