import { Pagination } from "@nextui-org/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Layout, PostGrid } from "../../Components";
import { getAllPosts } from "../../lib/getAllPosts";
import Error from "../_error";

const Latest: React.FC = ({
  data,
  total,
  message,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { page, search } = router.query;
  const [totalPosts] = useState(total);
  const [posts, updatePosts] = useState<any>(data);
  const [currentPage] = useState(page);

  // route user to the next page
  const handleChange = (pageNum: number) => {
    router.replace({
      pathname: `/latest/[page]`,
      query: { page: pageNum },
    });
  };

  useEffect(() => {
    // update result data everytime we go to another page
    updatePosts(data);
  }, [router.query.page]);

  if (message) {
    return <Error message={message} />;
  }

  return (
    <>
      <Head>
        <title> Latest Posts </title>
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
    </>
  );
};

export default Latest;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.query as any;
  const data = await getAllPosts(undefined, (page - 1) * 8);
  const total = data.pop().total;
  let message: string;
  if (page == 1) {
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
    };
  }
  if (total === 0) {
    message = "Nothing to see here folks";
    return {
      props: {
        message,
      },
    };
  }
  return {
    props: {
      data,
      total,
    },
  };
};
