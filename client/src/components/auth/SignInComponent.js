import React from "react"
import { useNavigate } from "react-router-dom";

import { styled } from '@mui/material/styles';
import { 
  Typography, 
  Paper, 
  Button,
  TextField as MuiTextField,
} from "@mui/material"
import { spacing } from "@mui/system";

import { Formik } from 'formik';
import * as Yup from "yup";

import authService from 'services/authService'

const SignInFormPaper = styled(Paper)`
  border: 1px solid red;
`

const SignInSchema = {
  email: '',
  password: '',
  submit: false,
}

const SignInValidationSchema = Yup.object().shape({
  email: Yup.string()
  .email("Must be a valid email")
  .max(255)
  .required("Email is required"),
  password: Yup.string().max(255).required("Password is required"),
});

const TextField = styled(MuiTextField)(spacing);
// const TextField = styled(MuiTextField)``;

export default function SignInComponent() {
  const navigate = useNavigate();

  console.log(spacing);
  return (
    <SignInFormPaper elevation={0}>
      <header>
        <Typography variant="h3" sx={{marginBottom: '1.5rem'}}>Welcome back</Typography>
      </header>
      <Formik
        initialValues={SignInSchema}
        validationSchema={SignInValidationSchema}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            console.log('aa')
            await authService.signIn(values.email, values.password);
            // navigate("/main");
          } catch ( error ) {
            const message = error.message || "Something went wrong";

            setStatus({ success: false });
            setErrors({ submit: message });
            setSubmitting(false);
          }
        }}
      >
        {
          ({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => {
            return (
              <form noValidate onSubmit={handleSubmit}>
                <TextField
                  type="email"
                  name="email"
                  label="Email Address"
                  value={values.email}
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  my={3}
                />
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  value={values.password}
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  my={3}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  Sign in
                </Button>
              </form>
            )
          }
        }
      </Formik>
      <footer>
        <Typography variant="body1" component="span">Not a User Yet?</Typography>
        <Button>Create an Account</Button>
      </footer>
    </SignInFormPaper>
  )
}