import React, { useState, useEffect } from "react";
import { RowItem } from "./RowItem";
import { movies } from "../../api/tmd/movies";
import { Spinner } from "../utils/Spinner";

import "./Row.css";

interface rowProps {
  title: string;
  fetchTitle: string;
}

export const Row: React.FC<rowProps> = ({ title, fetchTitle }) => {
  const [moviesData, setMoviesData] = useState<any>(null);
  //https://www.themoviedb.org/t/p/w600_and_h900_bestv2
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await movies.get(fetchTitle);

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
    <div className="row">
      <h2 className="row__title"> {title}</h2>
      <div className="row__movies">{items ? items : <Spinner />}</div>
    </div>
  );
};
