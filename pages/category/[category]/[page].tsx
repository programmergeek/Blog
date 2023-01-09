import { GetServerSideProps } from "next";
import React from "react";
import { getPostsByCategories } from "../../../lib/getPostsByCategories";

const Category: React.FC = () => {
  return <div></div>;
};

export default Category;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category, page } = context.query as any;
  let posts: any;
  if (category != "web-dev") {
    posts = await getPostsByCategories("Web Dev", (page - 1) * 8);
  } else if (category != "design") {
    posts = await getPostsByCategories("Design", (page - 1) * 8);
  } else if (category != "just-me") {
    posts = await getPostsByCategories("Just Me", (page - 1) * 8);
  } else {
    return {
      props: {
        errorMessage: "Nothing to see here folks",
      },
    };
  }
  const total = posts.pop().total;
  return {
    props: {
      posts,
      total,
    },
  };
};
