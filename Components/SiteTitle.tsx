import React from "react";

export const SiteTitle: React.FC = () => {
  return (
    <div
      style={{
        width: "fit-content",
        position: "relative",
      }}
    >
      <p
        style={{
          fontFamily: "Teko",
          fontSize: 120,
          letterSpacing: ".005rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        Blog
      </p>
      <div
        style={{
          height: 10,
          width: 75,
          backgroundColor: "rgb(142, 53, 8)",
          position: "absolute",
          top: 100,
          right: -20,
          zIndex: 0,
        }}
      ></div>
    </div>
  );
};
