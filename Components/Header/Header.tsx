import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Header: React.FC<Props> = ({ ...props }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "fit-content",
        border: "1px solid red",
      }}
    >
      <h1 style={{ fontSize: "80px", zIndex: 10, position: "relative" }}>
        {props.children}
      </h1>
      <div
        style={{
          width: "200px",
          height: 5,
          backgroundColor: "rgb(142, 53, 8)",
          position: "absolute",
          top: 57,
          left: "80%",
          zIndex: 0,
        }}
      ></div>
    </div>
  );
};
