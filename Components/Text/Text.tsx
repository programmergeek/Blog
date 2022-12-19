import React from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const Text: React.FC<Props> = ({ ...props }) => {
  return <p {...props}>{props.children}</p>;
};
