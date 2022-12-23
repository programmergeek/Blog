import React from "react";
import { Text as NextUIText, TextProps } from "@nextui-org/react";

export const Subtext: React.FC<TextProps> = ({ css, ...props }) => {
  return (
    <NextUIText
      css={{
        fontSize: 20,
        fontFamily: "Teko",
        letterSpacing: ".005rem",
        fontWeight: 500,
        ...css,
      }}
      {...props}
    >
      {props.children}
    </NextUIText>
  );
};
