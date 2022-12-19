import React from "react";
import { Card, styled, CardProps } from "@nextui-org/react";

const Custom = styled(Card, {
  variant: {
    flat: {
      maxWidth: 700,
      height: 500,
      border: "2px solid black",
      borderRadius: 0,
      backgroundColor: "White",
    },
  },
});

export const Crd: React.FC<CardProps> = ({ ...props }) => {
  return (
    <Custom {...props} variant="flat">
      {props.children}
    </Custom>
  );
};
