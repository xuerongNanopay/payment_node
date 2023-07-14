import React from 'react';
import {
  useRoutes
} from 'react-router-dom'

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import createTheme from 'theme';

import routes from "./routes";
import { AuthProvider } from 'contexts/JWTContext';

const App = _ => {
  const content = useRoutes(routes);

  return (
    <React.Fragment>
      <MUIThemeProvider theme={THEME}>
        <AuthProvider>
          {content}
        </AuthProvider>
      </MUIThemeProvider>
    </React.Fragment>
  )
}

export default App