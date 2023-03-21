import React from "react";
import { Text as NextUIText, TextProps } from "@nextui-org/react";

export const Text: React.FC<TextProps> = ({ css, ...props }) => {
  return (
    <NextUIText
      css={{
        fontFamily: "Rubik",
        fontSize: 16,
        "@md": {
          fontSize: 20,
        },
        ...css,
      }}
      {...props}
    >
      {props.children}
    </NextUIText>
  );
};
