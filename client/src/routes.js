import AuthLayout from "layouts/authLayout";

import SignInPage from "pages/auth/SignInPage";
import SignUpPage from "pages/auth/SignUpPage"

const routes = [
  {
    path: "auth",
    element: <AuthLayout/>,
    children: [
      {
        path: "sign-in",
        element: <SignInPage />
      },
      {
        path: "sign-up",
        element: <SignUpPage />
      }
    ]
  }
]

export default routes;