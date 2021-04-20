import React from "react";

interface errorProp {
  message: string;
}

export const Error: React.FC<errorProp> = ({ message }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: "60px",
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.6em",
      }}
    >
      {message}
    </div>
  );
};
