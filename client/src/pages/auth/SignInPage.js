import Grid from '@mui/material/Unstable_Grid2';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// import nbpBackGroundImage from ''
import nbpBackGroundImage from 'images/nbp-backgroud.svg'
import {ReactComponent as nbpLogo } from 'images/nbp_foree_remittance_logo.svg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Brand = styled(Paper).attrs({
  square: true,
  elevation: 0
})`
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
const AuthFormContainer = styled(Paper).attrs({
  square: true,
  elevation: 0
})`
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
        <Brand>
          <BrandLogo />
        </Brand>
      </Grid>
      <Grid xs={12} sm={6}>
        <AuthFormContainer>
          <h2>aaa</h2>
        </AuthFormContainer>
      </Grid>
    </Grid>
  )
}