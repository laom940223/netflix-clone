import React, { useState } from "react";
import styled from "styled-components";
//import { RowItemPreview } from "./RowItemPreview";
interface rowItemProp {
  posterPath: string;
  title: string;
  videoUrl?: string;
}

const RowItemWrap = styled.div<any>`
  flex: 0 0 auto;
  width: 200px;
  heigth: 300px;

  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const RowItemImg = styled.img<any>`
  max-width: 100%;
  max-height: 100%;
  border-radius: 4px;
`;

export const RowItem: React.FC<rowItemProp> = ({ posterPath, title }) => {
  return (
    <RowItemWrap>
      <RowItemImg src={posterPath} />
    </RowItemWrap>
  );
};
