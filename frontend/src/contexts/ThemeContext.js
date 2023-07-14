//Persist Theme to localStorage. (Remember Theme)
import { useEffect, createContext } from 'react';

import { THEMES } from '../constants'

const INITIAL_STATE = {
  theme: THEMES.DEFAULT,
  setTheme: (theme) => {}
}

// Create with INITIAL_STATE


function ThemeProvider() {
  //
}