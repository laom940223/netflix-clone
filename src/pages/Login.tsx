import React from "react";
import { NavBar } from "../components/navigation/NavBar";
import styled from "styled-components";
import { LoginForm } from "../components/LoginForm/LoginForm";

const LoginWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Login: React.FC<{}> = () => {
  return (
    <LoginWrapper>
      <NavBar />;
      <LoginForm />
    </LoginWrapper>
  );
};
