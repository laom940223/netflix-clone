import React from "react";
import styled from "styled-components";

const PreviewWrapper = styled.div<any>``;

interface previewWrapper {
  show?: boolean;
}

const RowItemPreview: React.FC<previewWrapper> = ({ show }) => {
  return (
    <PreviewWrapper show={show}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9_my9bxS05Y"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </PreviewWrapper>
  );
};

export default RowItemPreview;
