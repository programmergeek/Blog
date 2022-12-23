import React from "react";
import { Text, TextProps } from "@nextui-org/react";

export const Title: React.FC<TextProps> = ({ css, ...props }) => {
  return (
    <Text
      h1
      css={{
        fontFamily: "Teko",
        fontWeight: 400,
        fontSize: 40,
        letterSpacing: ".005em",
        "@md": {
          fontSize: "3.5rem",
        },
        "@xl": {
          fontSize: "4.5rem",
        },
        ...css,
      }}
      {...props}
    >
      {props.children}
    </Text>
  );
};
