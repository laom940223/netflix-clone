import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RowItem } from "./RowItem";
import { movies } from "../../api/tmd/movies";
import { generes } from "../../api/tmd/generes";

const RowContainer = styled.div`
  margin-top: -20px;
  width: 100%;
  position: relative;
`;

const RowTitle = styled.h1`
  padding: 1em 0.5em;
  margin-bottom: 0;
  font-size: 2em;
  color: white;
`;

const RowWrapper = styled.div`
  padding: 0;
  height: 300px;
  width: 100%;
  padding: 0.5em;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  gap: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArrowBack = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
  position: absolute;
  top: 230px;
  left: 0;
  z-index: 10;
`;

const ArrowAfter = styled.div`
  width: 40px;
  height: 40px;
  background-color: #444;
  position: absolute;
  top: 230px;
  right: 0;
  z-index: 10;
`;

export const Row: React.FC<{}> = () => {
  const [moviesData, setMoviesData] = useState<any>(null);
  //https://www.themoviedb.org/t/p/w600_and_h900_bestv2
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await movies.get(generes.upcoming);

        let ban = data.results.map((data: any) => {
          data.backdrop_path =
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
            data.backdrop_path;

          return data;
        });

        setMoviesData(ban);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, []);

  let items = null;
  if (moviesData) {
    items = moviesData.map((movie: any) => {
      return (
        <RowItem
          key={movie.id}
          posterPath={movie.backdrop_path}
          title={movie.title}
        />
      );
    });
  }

  return (
    <RowContainer>
      <RowTitle> Valeria </RowTitle>
      <RowWrapper>{items ? items : null}</RowWrapper>
      <ArrowBack />
      <ArrowAfter />
    </RowContainer>
  );
};
