// Persist Theme to localStorage. (Remember Theme)
// This ThemeContext only response to pick different theme that defined in side contants.
// The really style theme is MUITheme.
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