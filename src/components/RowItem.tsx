import React, { useEffect, useState } from "react";
import styled from "styled-components";
interface rowItemProp {
  posterPath: string;
  title: string;
  videoUrl?: string;
}

const RowItemWrap = styled.div<any>`
  width: 200px;
  heigth: 300px;

  transition: all 0.2s;
  &:hover {
    transform: scale(1.5, 1.5);
  }
`;

const RowItemImg = styled.img<any>`
  max-width: 100%;
  max-height: 100%;
  border-radius: 4px;
`;

export const RowItem: React.FC<rowItemProp> = ({ posterPath, title }) => {
  const [show, setShow] = useState(false);

  return (
    <RowItemWrap
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <RowItemImg src={posterPath} />
    </RowItemWrap>
  );
};
