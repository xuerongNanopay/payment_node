import React from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { styled } from '@mui/material/styles';
import { 
  Typography, 
  Paper, 
  Button as MuiButton,
  Box,
  TextField as MuiTextField,
} from "@mui/material"
import { spacing } from "@mui/system";

import { Formik } from 'formik';
import * as Yup from "yup";

import authService from 'services/authService'
import VisiablePasswordField from "components/form/VisiablePasswordField";

const SignInFormPaper = styled(Paper)`
  // border: 1px solid red;
`

const SignInSchema = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  submit: false,
}

const SignInValidationSchema = Yup.object().shape({
  email: Yup.string()
  .email("Must be a valid email")
  .max(255)
  .required("Email is required"),
  username: Yup.string().max(255).required("Username is required"),
  password: Yup.string().min(10).max(255).required("Password is required"),
  confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const TextField = styled(MuiTextField)(spacing);
// const TextField = styled(MuiTextField)``;

const Button = styled(MuiButton)(spacing);

export default function SignUpCompoent() {
  const navigate = useNavigate();

  return (
    <SignInFormPaper elevation={0}>
      <header>
        <Typography variant="h3" sx={{marginBottom: '1.5rem'}}>Create an account</Typography>
      </header>
      <Formik
        initialValues={SignInSchema}
        validationSchema={SignInValidationSchema}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            console.log('aa')
            await authService.signUp(values);
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
              <form 
                noValidate 
                onSubmit={handleSubmit}
              >
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
                  type="text"
                  name="username"
                  label="Username"
                  value={values.username}
                  error={Boolean(touched.username && errors.username)}
                  fullWidth
                  helperText={touched.username && errors.username}
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
                <TextField
                  type="password"
                  name="confirmPassword"
                  label="confirmPassword"
                  value={values.confirmPassword}
                  error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                  fullWidth
                  helperText={touched.confirmPassword && errors.confirmPassword}
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
                  mt={3}
                  mb={1}
                >
                  Sign in
                </Button>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'end',
                  }}
                >
                  <Button
                    component={Link}
                    to="/auth/reset-password"
                    color="primary"
                  >
                    Forgot password
                  </Button>
                </Box>

              </form>
            )
          }
        }
      </Formik>
      <footer>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography variant="body1" component="span">Not a User Yet?</Typography>
          <Button
            component={Link}
            to="/auth/sign-in"
            color="primary"
          >
            Sign In
          </Button>
        </Box>
      </footer>
    </SignInFormPaper>
  )
}