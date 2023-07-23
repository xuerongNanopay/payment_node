import Grid from '@mui/material/Unstable_Grid2';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// import nbpBackGroundImage from ''
import nbpBackGroundImage from 'images/nbp-backgroud.svg'
import {ReactComponent as nbpLogo } from 'images/nbp_foree_remittance_logo.svg'

import SignInComponent from 'components/auth/SignInComponent';

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
  display: grid;
  place-items: center;
  height: 100vh;

  ${(props) => props.theme.breakpoints.down("sm")} {
    height: 80vh;
  }
`

export default function SignInPage() {
  return (
    <Grid container>
      <Grid xs={12} sm={6}>
        <BrandPaper elevation={0} square>
          <BrandLogo />
        </BrandPaper>
      </Grid>
      <Grid xs={12} sm={6}>
        <AuthFormPaper elevation={0} square>
          <SignInComponent />
        </AuthFormPaper>
      </Grid>
    </Grid>
  )
}