import {
  Box,
  SvgIcon,
  Drawer as MuiDrawer,
} from '@mui/material';

import styled from '@emotion/styled';

import { ReactComponent as Logo } from 'image/nbp_foree_remittance_logo.svg';

const Drawer = styled(MuiDrawer)`
  // border-right: 0;

  // > div {
  //   border-right: 0;
  // }
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
      <BrandIcon/>
      <Box ml={1}>
          Mira 
      </Box>
    </Drawer>
  )
}

export default Sidebar;