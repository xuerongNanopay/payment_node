import React from "react"
import { useNavigate } from "react-router-dom";

import { styled } from '@mui/material/styles';
import { Typography, Paper, Button } from "@mui/material"

import { Formik } from 'formik';

const SignInFormPaper = styled(Paper)`
  border: 1px solid red;
`

export default function SignInComponent() {
  const navigate = useNavigate();


  return (
    <SignInFormPaper elevation={0}>
      <header>
        <Typography variant="h3">Welcome back</Typography>
      </header>
      <main>
      </main>
      <footer>
        <Typography variant="body1" component="span">Not a User Yet?</Typography>
        <Button>Create an Account</Button>
      </footer>
    </SignInFormPaper>
  )
}