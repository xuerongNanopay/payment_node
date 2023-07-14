import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import styled from "@emotion/styled";
import { Box, CssBaseline, Paper as MuiPaper } from "@mui/material";

import GlobalStyle from "../components/GlobalStyle";

const drawerWidth = 258;

const Root = styled.div`
  display: flex;
  min-height: 100vh;
  border: 1px solid red;
`;

const MainLayout = ({children}) => {
  return (
    <Root>
      <CssBaseline/>
      {/* <GlobalStyle/> */}
      <h1>aaaa</h1>
      {/* <Outlet/> */}
    </Root>
  )
}

export default MainLayout;