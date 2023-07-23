import { useRoutes } from "react-router-dom";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline} from "@mui/material";

import useTheme from "./hooks/useTheme";
import createTheme from "./theme";
import routes from "./routes";

function App() {
  console.log(useTheme().theme)
  const content = useRoutes(routes);
  return (
    <MuiThemeProvider theme={createTheme(useTheme().theme)}>
      <CssBaseline></CssBaseline>
      {content}
    </MuiThemeProvider>
  );
}

export default App;