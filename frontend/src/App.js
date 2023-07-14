import React from 'react';
import {
  useRoutes
} from 'react-router-dom'

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import createTheme from './theme';
import useTheme from 'hooks/useTheme';

import routes from "./routes";
import { AuthProvider } from 'contexts/JWTContext';

const App = _ => {
  const content = useRoutes(routes);
  const { theme } = useTheme();
  return (
    <React.Fragment>
      <MUIThemeProvider theme={createTheme(theme)}>
        <AuthProvider>
          {content}
        </AuthProvider>
      </MUIThemeProvider>
    </React.Fragment>
  )
}

export default App