import { NextPage } from "next";
import React from "react";
import { Footer, Navbar, SiteTitle, Title } from "../Components";
import styles from "../styles/Home.module.css";

interface Props {
  statusCode: number | undefined;
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <div>
      <div className={styles["content-layout"]}>
        <SiteTitle />
      </div>
      <Navbar />
      <div
        className={styles["content-layout"]}
        style={{ display: "grid", placeContent: "center", minHeight: "50vh" }}
      >
        <Title>
          Error: {statusCode} <br />
          Woops, looks like something went wrong...
        </Title>
      </div>
      <Footer />
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
