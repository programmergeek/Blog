import React from "react";
import { Text } from "@nextui-org/react";

type Props = {
  children: React.ReactNode;
};

export const Title: React.FC<Props> = ({ ...props }) => {
  return (
    <Text
      h1
      css={{
        fontFamily: "Teko",
        fontWeight: 400,
        fontSize: 32,
        letterSpacing: ".005em",
      }}
    >
      {props.children}
    </Text>
  );
};
