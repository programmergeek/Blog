import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useState } from "react";
import { getPostBySlug } from "../../lib";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RenderOption } from "../../Contentful/options";
import { Footer, Navbar, SiteTitle, Title } from "../../Components";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import styles from "../../styles/Post.module.css";

const Post: React.FC = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [post, updatePost] = useState(data);
  return (
    <div>
      <SiteTitle />
      <Navbar />
      <div
        style={{
          maxWidth: 1000,
          marginRight: "auto",
          marginLeft: "auto",
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        <Title style={{ fontSize: 100 }}> {post.title} </Title>
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
      </div>
      <div
        style={{ display: "grid", placeContent: "center", minHeight: "10vh" }}
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
      <Footer />
    </div>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query as any;
  const data = (await getPostBySlug(slug)) as any;
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
