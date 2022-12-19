import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Header: React.FC<Props> = ({ ...props }) => {
  return <h1> {props.children} </h1>;
};
