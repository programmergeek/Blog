import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";
import { PostGrid } from "../../Components";
import { getAllPosts } from "../../lib/getAllPosts";

export default function Search({
  data,
  total,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [totalPosts, updateTotalPosts] = useState(total);
  const [results, updateResults] = useState<any>(data);
  const [currentPage, updateCurrentPage] = useState(1);

  return (
    <div>
      <PostGrid posts={results} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page, search } = context.query as any;
  const data = await getAllPosts(undefined, (page - 1) * 8, search as string);
  const total = data.pop().total;
  return {
    props: {
      data,
      total,
    },
  };
};
