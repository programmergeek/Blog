import { Link } from "@nextui-org/react";
import React from "react";
import style from "../styles/SiteTitle.module.css";

export const SiteTitle: React.FC = () => {
  return (
    <div
      style={{
        width: "fit-content",
        position: "relative",
      }}
    >
      <Link href="/" color="inherit" css={{ position: "relative", zIndex: 10 }}>
        <p
          id={style.siteTitle}
          style={{
            fontFamily: "Teko",
            letterSpacing: ".005rem",
            zIndex: 10,
          }}
        >
          Blog
        </p>
        <div id={style.bar}></div>
      </Link>
    </div>
  );
};
