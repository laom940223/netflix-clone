import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { movies } from "../api/tmd/movies";
import { generes } from "../api/tmd/generes";

const BannerContainer = styled.div<any>`
  margin-top: -20px;
  width: 100%;
  height: 400px;
  position: relative;
  top: 0;
  left: 0;
  background-image: url("${(props) => (props.url ? props.url : null)}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: containt;
`;

const BannerInfoContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(#111, 0.9);
  display: flex;
  align-items: flex-end;
  color: white;
`;

const InfoWrapper = styled.div`
  margin-bottom: 2em;
  padding-left: 2em;
  width: 50%;
`;

const Title = styled.h1``;

const ButtonsContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
`;

const Button = styled.button`
  border: medium none;
  background-color: #111;
  color: #ddd;
  padding: 0.75em 2.5em;
  border-radius: 8px;
  margin-left: 1em;
  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    background-color: #ddd;
    color: #111;
  }
`;

const Description = styled.p`
  text-align: justify;
`;

//https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg
//https://www.themoviedb.org/t/p/w600_and_h900_bestv2

export const Banner: React.FC<{}> = () => {
  const [banner, setBanner] = useState<any>(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const { data } = await movies.get(generes.upcoming);
        const random = Math.floor(Math.random() * 10 + 1);
        let ban = data.results[random];

        ban.backdrop_path =
          "https://image.tmdb.org/t/p/w1280" + ban.backdrop_path;
        setBanner(ban);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBanner();
  }, []);

  let display = null;
  if (banner) {
    display = (
      <BannerContainer url={banner.backdrop_path}>
        <BannerInfoContainer>
          <InfoWrapper>
            <Title>{banner.original_title}</Title>
            <ButtonsContainer>
              <Button>Play</Button>
              <Button>My List</Button>
            </ButtonsContainer>
            <Description>{banner.overview.slice(0, 200)}</Description>
          </InfoWrapper>
        </BannerInfoContainer>
      </BannerContainer>
    );
  }

  return display;
};
