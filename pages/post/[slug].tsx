import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useState } from "react";
import { getPostBySlug } from "../../lib";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RenderOption } from "../../Contentful/options";
import {
  Footer,
  Layout,
  Navbar,
  SiteTitle,
  Title as PostTitle,
} from "../../Components";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import headerStyles from "../../styles/Headers.module.css";
import { getAllPosts } from "../../lib/getAllPosts";
import Head from "next/head";

const Post: React.FC = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [post, updatePost] = useState(data);
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Layout>
        <div className={styles["content-layout"]}>
          <PostTitle className={headerStyles["post-title"]}>
            {post.title}
          </PostTitle>
          <Image
            src={`https:${post.thumbnail.url}`}
            alt={post.thumbnail.title}
            width={"100"}
            height="100"
            objectFit="cover"
          />
          <div style={{ marginTop: 30 }}>
            {documentToReactComponents(post.body, RenderOption)}
          </div>
          <div
            style={{
              display: "grid",
              placeContent: "center",
              minHeight: "10vh",
            }}
          >
            <Link
              href={{ pathname: "/" }}
              style={{
                textAlign: "center",
                textDecoration: "underline",
                fontFamily: "Lato",
                color: "black",
              }}
            >
              Go back home
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = (await getAllPosts()) as any;
  posts.pop();
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as any;
  const data = (await getPostBySlug(slug)) as any;
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};
