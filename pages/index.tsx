import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Crd, Header, Subtext, Text, Title } from "../Components";
import { Btn } from "../Components";
import { Card } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <Header>Most Read</Header>
      <Title>Something That We Need In Difficult Times</Title>
      <Text>
        Big cities are known for having huge traffic congestion. Therefore, suck
        situations are suitable for car accidents. That is why it is important
        that we know how to react in such situations. In additions to how
        important it is to protect ourselves healthfully when car accidents...
      </Text>
      <Subtext>Article by Thamas Spencer</Subtext>
      <Btn size={"lg"}>#travel</Btn>
      <Crd
        css={{
          maxWidth: 700,
          height: 500,
          border: "2px solid black",
          borderRadius: 0,
          backgroundColor: "White",
        }}
        variant="flat"
      >
        <Card.Body css={{ padding: 25, paddingTop: 50 }}>
          <Title>This is Sparta</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            commodi accusantium cumque exercitationem quisquam iste iusto fugiat
            facere consequatur, blanditiis eveniet voluptas distinctio. Vel
            distinctio expedita a aperiam, mollitia nam!
          </Text>
        </Card.Body>
      </Crd>
    </div>
  );
}
