import { Button, ButtonProps, styled } from "@nextui-org/react";
import React, { ButtonHTMLAttributes } from "react";

const CustomBtn = styled(Button, {
  variants: {
    size: {
      md: {
        height: "fit-content",
        minWidth: "50px",
        fontSize: 20,
      },
      sm: {
        height: "fit-content",
        minWidth: "50px",
        fontSize: 15,
      },
      lg: {
        height: "fit-content",
        minWidth: 50,
        fontSize: 25,
        paddingLeft: 0,
      },
    },
    color: {
      transparent: {
        backgroundColor: "transparent",
        color: "Black",
      },
    },
  },
});

export const Btn: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <CustomBtn {...props} color="transparent">
      {props.children?.toString().toUpperCase()}
    </CustomBtn>
  );
};
