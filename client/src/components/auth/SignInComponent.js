import React from "react"

import { styled } from '@mui/material/styles';
import { Typography, Paper, Button } from "@mui/material"

const SignInFormPaper = styled(Paper)`

`

export default function SignInComponent() {
  return (
    <SignInFormPaper>
      <header>
        <Typography variant="h1">Welcome back</Typography>
      </header>
      <main>
      </main>
      <footer>
        <Typography component="span">Not a User Yet?</Typography>
        <Button>Create an Account</Button>
      </footer>
    </SignInFormPaper>
  )
}