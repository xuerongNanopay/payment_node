import { useRoutes } from "react-router-dom";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import useTheme from "./hooks/useTheme";
import createTheme from "./theme";
import { Button, CssBaseline, Paper, Typography } from "@mui/material";

function App() {
  console.log(useTheme().theme)
  return (
    <MuiThemeProvider theme={createTheme(useTheme().theme)}>
      <CssBaseline></CssBaseline>
      {/* <Paper>
        <Typography variant="h1" color="primary">This is h1</Typography>
        <h3>11111</h3>
        <Button variant="contained" color="secondary">Hi</Button>
      </Paper> */}
    </MuiThemeProvider>
  );
}

export default App;