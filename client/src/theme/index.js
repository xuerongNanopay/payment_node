import { createTheme as createMuiTheme } from "@mui/material/styles";

import variants from "./variants";
import typography from "./typography";
import breakpoints from "./breakpoints";

const createTheme = (name) => {
  const themeConfig = variants.find((variant) => variant.name === name);

  if ( !themeConfig ) {
    console.warn(new Error(`The theme ${name} is not valid`));
    // Focus to the default theme.
    themeConfig = variants[0];
  }

  return createMuiTheme(
    {
      spacing: 4,
      breakpoints: breakpoints,
      typography: typography,
      palette: themeConfig.palette,
    }
  )
}