import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useState } from "react";
import { getPostBySlug } from "../../lib";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RenderOption } from "../../Contentful/options";

const Post: React.FC = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [post, updatePost] = useState(data);
  return <div>{documentToReactComponents(post.body, RenderOption)}</div>;
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
