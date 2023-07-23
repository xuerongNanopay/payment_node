import { useState, useEffect, createContext } from 'react';

import { THEMES } from '../constants';

const INITIAL_STATE = {
  theme: THEMES.DEFAULT,
  setTheme: (theme) => {}
}

const ThemeContext = createContext(INITIAL_STATE);

function ThemeProvider({ children }) {
  const [theme, _setTheme] = useState(INITIAL_STATE.theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if ( !!storedTheme ) _setTheme(JSON.parse(storedTheme));
  }, [])

  const setTheme = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }