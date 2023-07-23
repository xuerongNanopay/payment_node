import AuthLayout from "./layouts/authLayout";

import SignInPage from "./pages/auth/SignInPage";

const routes = [
  {
    path: "auth",
    element: <AuthLayout/>,
    children: [
      {
        path: "sign-in",
        element: <SignInPage />
      }
    ]
  }
]

export default routes;