import React from "react";
import { Post } from "../Post/Post";
import styles from "./PostGrid.module.css";

type Props = {
  posts: any;
};

export const PostGrid: React.FC<Props> = ({ ...props }) => {
  const posts = props.posts.post as any[];

  return (
    <div className={styles.posts}>
      {props.posts.posts.map((post: any) => (
        <Post
          category={post.category.category}
          title={post.title}
          text={post.description}
          date={post.date}
          imgSrc={post.thumbnail.url}
          link={`post/${post.slug}`}
          key={post.title}
        />
      ))}
    </div>
  );
};
