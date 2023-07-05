import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

const AuthRoot = styled.div`
  height: 100vh;
  width: 100vw;
`

const AuthLayout = _ => {
  return (
    <AuthRoot>
      <Outlet />
    </AuthRoot>
  );
};

export default AuthLayout;