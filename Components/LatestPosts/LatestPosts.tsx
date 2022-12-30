import React, { useState, useEffect } from "react";
import { Header, Post } from "..";
import { Pagination } from "@nextui-org/react";
import styles from "./LatestPosts.module.css";

export const LatestPosts: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  return (
    <div>
      <div style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Header>Latest</Header>
      </div>
      <div className={styles.latest}>
        <Post
          category="Web Dev"
          date="12/04/2022"
          imgSrc="/images/gunsligner.jpg"
          link="https://google.com"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati voluptas accusantium voluptatibus, iste quasi est alias omnis ratione a natus unde et maxime sint, minus labore atque nulla dolor."
          title="Title"
        />
        <Post
          category="Web Dev"
          date="12/04/2022"
          imgSrc="/images/gunsligner.jpg"
          link="https://google.com"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati voluptas accusantium voluptatibus, iste quasi est alias omnis ratione a natus unde et maxime sint, minus labore atque nulla dolor."
          title="Title"
        />
        <Post
          category="Web Dev"
          date="12/04/2022"
          imgSrc="/images/gunsligner.jpg"
          link="https://google.com"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati voluptas accusantium voluptatibus, iste quasi est alias omnis ratione a natus unde et maxime sint, minus labore atque nulla dolor."
          title="Title"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 50,
          paddingBottom: 10,
        }}
      >
        <Pagination total={10} initialPage={1} />
      </div>
    </div>
  );
};
