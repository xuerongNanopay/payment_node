import React from 'react';
import {
  useRoutes
} from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles';

import routes from "./routes";
import { AuthProvider } from 'contexts/JWTContext';

//TODO: move to theme context;
const THEME = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
}

const App = _ => {
  const content = useRoutes(routes);

  return (
    <React.Fragment>
      <ThemeProvider theme={THEME}>
        <AuthProvider>
          {content}
        </AuthProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App