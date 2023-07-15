import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import styled from "@emotion/styled";
import { Box, CssBaseline, Paper as MuiPaper } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { spacing } from "@mui/system";

import GlobalStyle from "../components/GlobalStyle";

const drawerWidth = 258;

const Root = styled.div`
  display: flex;
  min-height: 100vh;
  border: 1px solid red;
`;

const Drawer = styled.div`
  border: 1px solid blue;
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
  border: 1px solid green;
`;


const MainLayout = () => {
  return (
    <Root>
      <CssBaseline/>
      {/* <GlobalStyle/> */}
      <Drawer></Drawer>

      {/* <Outlet/> */}
    </Root>
  )
}

export default MainLayout;