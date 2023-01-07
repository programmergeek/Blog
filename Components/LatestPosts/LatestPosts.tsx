import React, { useState, useEffect } from "react";
import { Header, Post, PostGrid } from "..";
import { Pagination } from "@nextui-org/react";
import styles from "./LatestPosts.module.css";

type Props = {
  posts: any;
  total: any;
};

export const LatestPosts: React.FC<Props> = ({ ...props }) => {
  const [posts, setPosts] = useState<any>(props.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(props.total);

  return (
    <div>
      <div style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Header>Latest</Header>
      </div>
      <PostGrid posts={posts} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 50,
          paddingBottom: 10,
        }}
      >
        <Pagination
          total={Math.ceil(total / 8)}
          initialPage={1}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};
