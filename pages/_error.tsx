import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Footer, Navbar, SiteTitle, Text, Title } from "../Components";
import styles from "../styles/Home.module.css";

interface Props {
  statusCode: number | undefined;
  message?: string;
}

const Error: NextPage<Props> = ({ statusCode, message }) => {
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
          {message ? message : "Woops, looks like something went wrong..."}
        </Title>
        <Link
          href={{ pathname: "/" }}
          style={{
            textAlign: "center",
            textDecoration: "underline",
            fontFamily: "Lato",
            color: "black",
          }}
        >
          Go back home
        </Link>
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
