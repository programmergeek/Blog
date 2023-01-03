import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import {
  Header,
  HighlightPost,
  Post,
  Btn,
  SiteTitle,
  LatestPosts,
  Navbar,
} from "../Components";
import { Col, Container, Pagination, Row } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <div className={styles["content-layout"]}>
        <div
          style={{
            height: 200,
            width: "100%",
          }}
        >
          <SiteTitle />
        </div>
        <Navbar />
        <main
          style={{
            width: "100%",
          }}
        >
          <HighlightPost
            category="Design"
            date="23/12/2022"
            imgSrc="/images/gunsligner.jpg"
            link="/design"
            text="Big cities are known for having huge traffic congestion. Therefore, such situations are suitable for car accidents. That is why it is very important that we know how to react in such situations. In addition to how important it is to protect ourselves from healthfully when car accidents..."
            title="Something That We Need In Difficult Times"
          />
          <LatestPosts />
        </main>
        <footer
          style={{
            height: 300,
            width: "100%",
          }}
        ></footer>
      </div>
    </div>
  );
}
