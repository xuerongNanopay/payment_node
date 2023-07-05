import React from "react";
import { Navigate } from "react-router-dom";

import useAuth from "hooks/useAuth";

// For routes that can only be accessed by authenticated users
function AuthGuard({ children }) {
  const { user } = useAuth();

  if ( ! user ) {
    return <Navigate to="/auth/sign-in"/>;
  }

  // if ( ! user.isEmailVerified ) {
  //   return <Navigate to="/auth/verify-email"/>
  // }

  //TODO: onboarding a user.
  // if ( ! user.isOnboarded ) {
  //   return <Navigate to="/auth/onboard"/>
  // }

  return <React.Fragment>{children}</React.Fragment>;
}

export default AuthGuard;
