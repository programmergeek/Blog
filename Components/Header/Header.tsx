import React from "react";
import { Text } from "@nextui-org/react";

type Props = {
  children: React.ReactNode;
};

export const Header: React.FC<Props> = ({ ...props }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "fit-content",
      }}
    >
      <Text
        css={{
          fontSize: "50px",
          zIndex: 10,
          position: "relative",
          fontFamily: "Teko",
        }}
      >
        {props.children}
      </Text>
      <div
        style={{
          width: "100px",
          height: 4,
          backgroundColor: "rgb(142, 53, 8)",
          position: "absolute",
          top: 40,
          left: "80%",
          zIndex: 0,
        }}
      ></div>
    </div>
  );
};
