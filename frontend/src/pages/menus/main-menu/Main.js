import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, CssBaseline, Paper as MuiPaper } from "@mui/material";

import GlobalStyle from "components/GlobalStyle";

const drawerWidth = 258;

const Root = styled.div`
  display: flex;
  min_height: 100vh;
`

const Drawer = styled.div`
  ${(props) => props.theme.breakpoints.up("md")} {
    width: ${drawerWidth}px;
    flex-shrink: 0;
  }
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;


const MainLayout = _ => {
  const router = useLocation();
  console.log(router)
  console.log('Theme: ', useTheme())
  return (
    <Root>
      <GlobalStyle/>
      <Outlet></Outlet>
    </Root>
  )
}

export default MainLayout;

