import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";
import { getAllPosts } from "../../lib/getAllPosts";

export default function Search({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [results, updateResults] = useState<any>([]);
  const [loading, updateLoading] = useState(true);
  const [currentPage, updateCurrentPage] = useState(1);
  const [total, updateTotal] = useState(0);

  return JSON.stringify(data);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = parseInt(context.params?.page as string);
  const search = context.params?.search as string;
  const data = await getAllPosts(undefined, (page - 1) * 8, search as string);
  return {
    props: {
      data,
    },
  };
};
