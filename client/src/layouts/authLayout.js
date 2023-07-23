import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

const AuthRoot = styled.div`
  height: 100vh;
  width: 100vw;
`

export default function AuthLayout() {
  return (
    <AuthRoot>
      <Outlet/>
    </AuthRoot>
  )
}