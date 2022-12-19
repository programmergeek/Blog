import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Subtext: React.FC<Props> = ({ ...props }) => {
  return <h3> {props.children} </h3>;
};
