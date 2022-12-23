import React from "react";
import { Text, Card } from "@nextui-org/react";

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
          "@md": {
            fontSize: "60px",
          },
        }}
      >
        {props.children}
      </Text>
      <Card
        css={{
          width: "100px",
          height: 4,
          backgroundColor: "rgb(142, 53, 8)",
          position: "absolute",
          top: 40,
          left: "80%",
          zIndex: 0,
          borderRadius: 0,
          "@md": {
            width: "150px",
            height: 5,
            top: 47,
          },
        }}
      >
        {""}
      </Card>
    </div>
  );
};
