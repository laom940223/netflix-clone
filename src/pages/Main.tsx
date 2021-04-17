import React from "react";
import { Banner } from "../components/Banner";
import { NavBar } from "../components/navigation/NavBar";
import { Row } from "../components/Row/Row";

export const Main: React.FC<{}> = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Row />
    </>
  );
};
