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
  const data = await getPostsByCategories(camelCase(category), (page - 1) * 8);
  if (data[0].category) {
    title = data[0].category.category;
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

const camelCase = (str: string) => {
  const wordArray = str.split("-");
  const out = wordArray.map((word, index) => {
    if (index > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word.charAt(0).toLowerCase() + word.slice(1);
  });

  return out.join("");
};
