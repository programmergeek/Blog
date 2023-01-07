import styles from "../styles/Home.module.css";
import {
  HighlightPost,
  SiteTitle,
  LatestPosts,
  Navbar,
  Footer,
} from "../Components";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getAllPostsForHome } from "../lib/getAllPostsForHome";

export default function Home({
  highlightPost,
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
            category={highlightPost.category.category}
            date={highlightPost.date}
            imgSrc={highlightPost.thumbnail.url}
            link={highlightPost.slug}
            text={highlightPost.description}
            title={highlightPost.title}
          />
          <LatestPosts />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = (await getAllPostsForHome()) as any;
  const highlightPost = data.highlightedPost;
  const posts = data.posts;
  console.log(highlightPost);
  console.log(posts);
  return {
    props: {
      highlightPost,
      posts,
    },
  };
};
