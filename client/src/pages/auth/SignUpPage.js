import Grid from '@mui/material/Unstable_Grid2';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import nbpBackGroundImage from 'images/nbp-backgroud.svg'
import {ReactComponent as nbpLogo } from 'images/nbp_foree_remittance_logo.svg'

import SignUpCompoent from 'components/auth/SignUpComponent';


const BrandPaper = styled(Paper)`
  display: grid;
  place-items: center;
  height: 100vh;
  background-image: url(${nbpBackGroundImage});

  ${(props) => props.theme.breakpoints.down("sm")} {
    height: 20vh;
  }
`
const BrandLogo = styled(nbpLogo)`
  width: 100%;
  height: 10vh;

  ${(props) => props.theme.breakpoints.down("sm")} {
    height: 50%;
  }
`
const AuthFormPaper = styled(Paper)`
  margin: 2rem auto;
  width: 90%;

  ${(props) => props.theme.breakpoints.up("sm")} {
    display: grid;
    place-items: center;
    height: 100vh;
    margin: 0 auto;
  }
`

export default function SignUpPage() {
  return (
    <Grid container>
      <Grid xs={12} sm={4} md={7} lg={8}>
        <BrandPaper elevation={0} square>
          <BrandLogo />
        </BrandPaper>
      </Grid>
      <Grid xs={12} sm={8} md={5} lg={4}>
        <AuthFormPaper elevation={0} square>
          <SignUpCompoent />
        </AuthFormPaper>
      </Grid>
    </Grid>
  )
}