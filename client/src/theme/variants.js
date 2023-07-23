import merge from 'deepmerge'

import { green } from "@mui/material/colors";

import { THEMES } from "../constants";

const customBlue = {
  50: "#e9f0fb",
  100: "#c8daf4",
  200: "#a3c1ed",
  300: "#7ea8e5",
  400: "#6395e0",
  500: "#4782da",
  600: "#407ad6",
  700: "#376fd0",
  800: "#2f65cb",
  900: "#2052c2 ",
};

const defaultVariant = {
  name: THEMES.DEFAULT,
  palette: {
    primary: {
      main: "#1A6B54",
      contrastText: "#FFF",
    },
    secondary: {
      main: green[500],
      contrastText: "#FFF",
    },
  }
  // palette: {
  //   mode: 'light',
  //   primary: {
  //     main: customBlue[700],
  //     contrastText: "#FFF",
  //   },
  //   secondary: {
  //     main: customBlue[500],
  //     contrastText: "#FFF",
  //   },
    // background: {
    //   default: "#F7F9FC",
    //   paper: "#FFF",
    // },
  // }
};

const nbpVariant = merge(defaultVariant, {
  name: THEMES.NBP,
  palette: {
    primary: {
      main: green[800],
      contrastText: "#FFF",
    },
    secondary: {
      main: green[500],
      contrastText: "#FFF",
    },
  }
});

const variants = [
  defaultVariant,
  nbpVariant,
];

export default variants;