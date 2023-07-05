import AuthLayout from './layouts/Auth';

import SignIn from 'pages/auth/SignIn';
import SignUp from 'pages/auth/SignUp'
import Page404 from 'pages/auth/Page404';
import Page500 from 'pages/auth/Page500';
import VerifyEmail from 'pages/auth/VerifyEmail'
import ForgetPassword from 'pages/auth/ForgetPassword'

import MainMenu from 'layouts/Main'

const routes = [
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "verify-email",
        element: <VerifyEmail />
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  {
    path: "main",
    element: <MainMenu />,
  },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]

export default routes;