import React from "react";
import { Text, TextProps } from "@nextui-org/react";

export const Title: React.FC<TextProps> = ({ css, ...props }) => {
  return (
    <Text
      h1
      css={{
        fontFamily: "Teko",
        fontWeight: 400,
        fontSize: 32,
        letterSpacing: ".005em",
        ...css,
      }}
      {...props}
    >
      {props.children}
    </Text>
  );
};
