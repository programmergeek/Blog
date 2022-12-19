import React from "react";
import { Teko } from "@next/font/google";

type Props = {
  children: React.ReactNode;
};

const teko = Teko({
  weight: "400",
  preload: true,
});
export const Header: React.FC<Props> = ({ ...props }) => {
  return <h1 className={teko.className}> {props.children} </h1>;
};
