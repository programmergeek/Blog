import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { HighlightPost, Post } from "../Components";

export default function Home() {
  return (
    <div>
      <HighlightPost
        category="software"
        date="12/12/2022"
        imgSrc="https://picsum.photos/750/650"
        text="Vivamus sit amet fermentum nunc, sed eleifend neque. Praesent porttitor viverra metus vel dapibus. 
        Vestibulum consectetur enim quis ipsum tincidunt, at porta orci volutpat. Duis dapibus tellus consectetur 
        imperdiet porta. Fusce sollicitudin ex dolor, vitae tristique enim consectetur a. Aenean imperdiet lobortis 
        lobortis. Maecenas lacus lacus, rhoncus ut dolor eget, dictum iaculis enim.
        Maecenas sodales ut orci in fermentum. "
        title="Lorem Ipsum"
      />
      <Post />
    </div>
  );
}
