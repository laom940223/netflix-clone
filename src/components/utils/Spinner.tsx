import React from "react";
import "./Spinner.css";

export const Spinner: React.FC<{}> = () => {
  return (
    <div className="spin__container">
      <div className="spin"></div>;
    </div>
  );
};
