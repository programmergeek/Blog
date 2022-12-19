import React from "react";
import { Lato } from "@next/font/google";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export const Text: React.FC<Props> = ({ ...props }) => {
  return <p className={lato.className}>{props.children}</p>;
};
