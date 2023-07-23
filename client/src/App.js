import { useRoutes } from "react-router-dom";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import useTheme from "./hooks/useTheme";
import createTheme from "./theme";
import { Typography } from "@mui/material";

function App() {
  return (
    <MuiThemeProvider theme={createTheme(useTheme().theme)}>
      <Typography variant="h1">This is h1</Typography>
    </MuiThemeProvider>
  );
}

export default App;
