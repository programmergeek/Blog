import React, { HTMLAttributes } from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { SiteTitle } from "../SiteTitle";
import style from "../../styles/Layout.module.css";

export const Layout: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div>
      <main className={style.layout}>
        <SiteTitle />
        <Navbar />
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
