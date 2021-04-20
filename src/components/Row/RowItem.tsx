import React from "react";
import { useHistory } from "react-router";

interface rowItemProp {
  posterPath: string;
  title: string;
  videoUrl?: string;
}

export const RowItem: React.FC<rowItemProp> = ({ posterPath, title }) => {
  const history = useHistory();

  const handleClick = () => {
    const newTitle = title.replaceAll(" ", "+");
    history.push({
      pathname: "/video",
      search: `?name=${newTitle}`,
    });
  };

  return (
    <div onClick={handleClick} className="row__movie__container">
      <img className="row__movie__image" alt="asd" src={posterPath} />
    </div>
  );
};
