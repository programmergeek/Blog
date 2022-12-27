import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Header, HighlightPost, Post, Btn, SiteTitle } from "../Components";
import { Col, Container, Row } from "@nextui-org/react";

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
        <nav
          style={{
            paddingTop: 25,
            paddingBottom: 25,
            width: "100%",
            display: "flex",
            gap: 10,
          }}
        >
          <Btn size="lg">#Web Dev</Btn>
          <Btn size="lg">#Design</Btn>
          <Btn size="lg">#just me</Btn>
        </nav>
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
          <div style={{ paddingTop: 50, paddingBottom: 50 }}>
            <Header>Latest</Header>
          </div>
          <div className={styles.latest}>
            <Row>
              <Col>
                <Post
                  category="Web Dev"
                  date="12/04/2022"
                  imgSrc="/images/gunsligner.jpg"
                  link="https://google.com"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati voluptas accusantium voluptatibus, iste quasi est alias omnis ratione a natus unde et maxime sint, minus labore atque nulla dolor."
                  title="Title"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Post
                  category="Web Dev"
                  date="12/04/2022"
                  imgSrc="/images/gunsligner.jpg"
                  link="https://google.com"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati voluptas accusantium voluptatibus, iste quasi est alias omnis ratione a natus unde et maxime sint, minus labore atque nulla dolor."
                  title="Title"
                />
              </Col>
            </Row>
          </div>
          <div></div>
        </main>
      </div>
      <footer
        style={{
          height: 300,
          width: "100%",
        }}
      ></footer>
    </div>
  );
}
