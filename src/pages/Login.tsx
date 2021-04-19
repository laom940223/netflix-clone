import React from "react";
import { NavBar } from "../components/navigation/NavBar";
import styled from "styled-components";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { useAuth } from "../context/AuthContext";
import { Redirect } from "react-router";
import { Footer } from "../components/footer/Footer";

const LoginWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Login: React.FC<{}> = () => {
  const { user } = useAuth();

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <LoginWrapper>
        <NavBar />;
        <LoginForm />
      </LoginWrapper>
      <Footer />
    </>
  );
};
