import { CardProps, CSS } from "@nextui-org/react";
import React from "react";
import { Crd } from "./Card";

interface Props extends CSS {
  category: string;
  imgSrc: string;
}

export const ImageCard: React.FC<Props> = ({ css, ...props }) => {
  const styles: CSS = {
    backgroundImage: `url(${props.imgSrc})`,
    position: "relative",
    height: 700,
  };
  const extendCSS = css as CSS | undefined;

  return <Crd css={{ ...styles, ...extendCSS }}>{""}</Crd>;
};
