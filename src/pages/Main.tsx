import React from "react";
import { Banner } from "../components/Banner/Banner";
import { NavBar } from "../components/navigation/NavBar";
import { Row } from "../components/Row/Row";
import { generes } from "../api/tmd/generes";

export const Main: React.FC<{}> = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Row title="Upcoming" fetchTitle={generes.upcoming} />
      <Row title="TV Popular" fetchTitle={generes.tvPopular} />
      <Row title="Popular" fetchTitle={generes.popular} />
      <Row title="Now Playing" fetchTitle={generes.nowPlaying} />
    </div>
  );
};
