import React from "react";
import styled from "styled-components";

interface rowItemProp {
  posterPath: string;
  title: string;
  videoUrl?: string;
}

export const RowItem: React.FC<rowItemProp> = ({ posterPath, title }) => {
  return (
    <div className="row__movie__container">
      <img className="row__movie__image" alt="asd" src={posterPath} />
    </div>
  );
};
