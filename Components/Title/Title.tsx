import React from "react";
import { Text, TextProps } from "@nextui-org/react";
import style from "../../styles/Headers.module.css";

export const Title: React.FC<TextProps> = ({ css, ...props }) => {
  return (
    <Text
      // className={style['post-title']}
      css={{
        fontFamily: "Teko",
        fontWeight: 400,
        fontSize: "$6xl",
        letterSpacing: ".005em",
        lineHeight: "70px",
        "@md": {
          fontSize: "$8xl",
          lineHeight: "80px",
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
