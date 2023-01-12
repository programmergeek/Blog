import React, { HTMLAttributes } from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { SiteTitle } from "../SiteTitle";

export const Layout: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div>
      <main
        style={{
          maxWidth: 1440,
          marginRight: "auto",
          marginLeft: "auto",
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        <SiteTitle />
        <Navbar />
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
