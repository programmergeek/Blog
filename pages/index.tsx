import styles from "../styles/Home.module.css";
import { HighlightPost, LatestPosts, Layout } from "../Components";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getAllPostsForHome } from "../lib/getAllPostsForHome";
import Head from "next/head";

export default function Home({
  highlightPost,
  posts,
  total,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Layout>
        <HighlightPost
          category={highlightPost.category.category}
          date={highlightPost.date}
          imgSrc={highlightPost.thumbnail.url}
          link={`/post/${highlightPost.slug}`}
          text={highlightPost.description}
          title={highlightPost.title}
        />
        <LatestPosts posts={posts} total={total} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = (await getAllPostsForHome()) as any;
  const highlightPost = data.highlightedPost;
  const posts = data.posts;
  const total = posts.pop().total;
  return {
    props: {
      highlightPost,
      posts,
      total,
    },
  };
};
