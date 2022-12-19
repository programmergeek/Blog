import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Header, Text } from "../Components";

export default function Home() {
  return (
    <div>
      <Header>Something That We Need In Difficult Times</Header>
      <Text>
        Big cities are known for having huge traffic congestion. Therefore, suck
        situations are suitable for car accidents. That is why it is important
        that we know how to react in such situations. In additions to how
        important it is to protect ourselves healthfully when car accidents...
      </Text>
    </div>
  );
}
