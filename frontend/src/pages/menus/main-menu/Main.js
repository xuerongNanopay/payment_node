import React from "react";
import { Outlet } from "react-router-dom";

import { Box, CssBaseline, Paper as MuiPaper } from "@mui/material";

import styled from "@emotion/styled";

const drawerWidth = 258;

const Root = styled.div`
  display: flex;
  min_height: 100vh;
  background-color: pink;
`

const MainLayout = _ => {

  return (
    <Root>
      <CssBaseline />
      aaa
      {/* <Outlet></Outlet> */}
    </Root>
  )
}

export default MainLayout;

