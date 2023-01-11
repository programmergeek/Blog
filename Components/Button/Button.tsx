import { Button as NextUIButton, ButtonProps, styled } from "@nextui-org/react";
import React, { ButtonHTMLAttributes } from "react";

export const Btn: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <NextUIButton
      ripple={false}
      css={{
        fontSize: 27,
        backgroundColor: "transparent",
        color: "Black",
        minWidth: 50,
      }}
    >
      {props.children}
    </NextUIButton>
  );
};
