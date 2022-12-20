import React from "react";
import { Card, CardProps } from "@nextui-org/react";

export const Crd: React.FC<CardProps> = ({ css, ...props }) => {
  return (
    <Card
      variant="flat"
      css={{
        border: "2px solid black",
        borderRadius: 0,
        backgroundColor: "#fff",
        paddingTop: 25,
        paddingLeft: 10,
        paddingRight: 10,
        ...css,
      }}
      {...props}
    >
      {props.children}
    </Card>
  );
};
