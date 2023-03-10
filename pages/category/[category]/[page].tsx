import { Pagination } from "@nextui-org/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Layout, PostGrid } from "../../../Components";
import { getPostsByCategories } from "../../../lib/getPostsByCategories";
import Error from "../../_error";
import Head from "next/head";

const Category: React.FC = ({
  data,
  total,
  errorMessage,
  title,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { page, category } = router.query;
  const [totalPosts, updateTotalPosts] = useState(total);
  const [posts, updatePosts] = useState<any>(data);
  const [currentPage, updateCurrentPage] = useState(page);

  // route user to the next page
  const handleChange = (pageNum: number) => {
    router.replace({
      pathname: `/[category]/[page]`,
      query: { category: category, page: pageNum },
    });
  };

  useEffect(() => {
    // update result data everytime we go to another page
    updatePosts(data);
  }, [router.query.page, router.query.category]);

  if (errorMessage) {
    return <Error message={errorMessage} />;
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <PostGrid posts={posts} key={router.asPath} />
        <div
          style={{ display: "grid", placeContent: "center", paddingTop: 50 }}
        >
          <Pagination
            total={Math.ceil(totalPosts / 8)}
            initialPage={parseInt(currentPage as string)}
            onChange={(pageNum) => handleChange(pageNum)}
          />
        </div>
      </Layout>
    </div>
  );
};

export default Category;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category, page } = context.query as any;
  let title;
  let data: any;
  if (category == "web-dev") {
    data = await getPostsByCategories("Web Dev", (page - 1) * 8);
    title = "Web Dev";
  } else if (category == "design") {
    data = await getPostsByCategories("Design", (page - 1) * 8);
    title = "Design";
  } else if (category == "just-me") {
    data = await getPostsByCategories("Just Me", (page - 1) * 8);
    title = "Just Me";
  } else {
    return {
      props: {
        errorMessage: "Nothing to see here folks",
      },
    };
  }
  const total = data.pop().total;
  return {
    props: {
      data,
      total,
      title,
    },
  };
};
