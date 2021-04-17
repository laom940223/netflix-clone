import React from "react";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/navigation/NavBar";
import { Row } from "./components/Row";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Row />
      <Row />
      <Row />
    </>
  );
}

export default App;
