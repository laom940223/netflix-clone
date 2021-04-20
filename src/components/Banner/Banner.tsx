import React, { useEffect, useState } from "react";
import { movies } from "../../api/tmd/movies";
import { generes } from "../../api/tmd/generes";
import "./Banner.css";
import { Spinner } from "../utils/Spinner";

import { useHistory } from "react-router";

//https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg
//https://www.themoviedb.org/t/p/w600_and_h900_bestv2

export const Banner: React.FC<{}> = () => {
  const history = useHistory();

  const [banner, setBanner] = useState<any>(null);

  const handlePlayClick = () => {
    history.push({
      pathname: "/video",
      search: `?name=${banner.name.replaceAll(" ", "+")}`,
    });
  };

  console.log("Banner", banner);
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const { data } = await movies.get(generes.tvPopular);
        const random = Math.floor(Math.random() * 10 + 1);
        let ban = data.results[random];

        ban.backdrop_path =
          "https://image.tmdb.org/t/p/w1280" + ban.backdrop_path;

        console.log(ban.backdrop_path);
        setBanner(ban);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBanner();
  }, []);

  let display = <Spinner />;
  if (banner) {
    display = (
      // <BannerContainer url={}>
      <div
        className="banner"
        style={{ backgroundImage: `url(${banner.backdrop_path})` }}
      >
        <div className="banner__info">
          <h1 className="banner__title">{banner.title || banner.name}</h1>
          <div className="banner__buttonsContainer">
            <button onClick={handlePlayClick} className="banner__button">
              Play
            </button>
            <button className="banner__button">Add</button>
          </div>
          <p className="banner__description">{banner.overview.slice(0, 200)}</p>
        </div>
      </div>
    );
  }

  return display;
};
