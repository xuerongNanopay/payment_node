import React from 'react';
import {
  useRoutes
} from 'react-router-dom'

import routes from "./routes";
import { AuthProvider } from 'contexts/JWTContext';

const App = _ => {
  const content = useRoutes(routes);

  return (
    <React.Fragment>
      <AuthProvider>
        {content}
      </AuthProvider>
    </React.Fragment>
  )
}

export default App