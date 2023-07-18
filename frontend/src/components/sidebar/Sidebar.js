import { NavLink } from "react-router-dom";

import {
  Box,
  SvgIcon,
  Drawer as MuiDrawer,
  ListItemButton
} from '@mui/material';

import styled from '@emotion/styled';

import { ReactComponent as Logo } from 'image/nbp_foree_remittance_logo.svg';

const Drawer = styled(MuiDrawer)`
  // border-right: 0;

  // > div {
  //   border-right: 0;
  // }
`;

const Brand = styled(ListItemButton)`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  color: ${(props) => props.theme.sidebar.header.color};
  background-color: ${(props) => props.theme.sidebar.header.background};
  font-family: ${(props) => props.theme.typography.fontFamily};
  min-height: 56px;
  padding-left: ${(props) => props.theme.spacing(6)};
  padding-right: ${(props) => props.theme.spacing(6)};
  justify-content: center;
  cursor: pointer;
  flex-grow: 0;

  ${(props) => props.theme.breakpoints.up("sm")} {
    min-height: 64px;
  }

  &:hover {
    background-color: ${(props) => props.theme.sidebar.header.background};
  }
`;

const BrandIcon = styled(Logo)`
  // margin-right: ${(props) => props.theme.spacing(2)};
  // color: ${(props) => props.theme.sidebar.header.brand.color};
  // fill: ${(props) => props.theme.sidebar.header.brand.color};
  width: 100px;
  height: 64px;
`;

const Sidebar = ({...rest}) => {
  return (
    <Drawer variant="permanent" {...rest}>
      <Brand component={NavLink} to="/">
        <BrandIcon/>
      </Brand>
    </Drawer>
  )
}

export default Sidebar;