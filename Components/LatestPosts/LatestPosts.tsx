import React, { useState, useEffect } from "react";
import { Header, Post, PostGrid } from "..";
import { Pagination } from "@nextui-org/react";
import styles from "./LatestPosts.module.css";

export const LatestPosts: React.FC = () => {
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <div>
      <div style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Header>Latest</Header>
      </div>
      {loading ? (
        <div style={{ fontFamily: "Teko", fontSize: 40, textAlign: "center" }}>
          loading...
        </div>
      ) : (
        <PostGrid posts={posts} />
      )}
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
