import { Pagination } from "@nextui-org/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Navbar, PostGrid, SiteTitle } from "../../Components";
import { getAllPosts } from "../../lib/getAllPosts";
import styles from "../../styles/Home.module.css";

export default function Search({
  data,
  total,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { page, search } = router.query;
  const [totalPosts, updateTotalPosts] = useState(total);
  const [posts, updatePosts] = useState<any>(data);
  const [currentPage, updateCurrentPage] = useState(page);

  // route user to the next page
  const handleChange = (pageNum: number) => {
    router.replace({
      pathname: `/search/[page]`,
      query: { search: search, page: pageNum },
    });
  };

  useEffect(() => {
    // update result data everytime we go to another page
    updatePosts(data);
  }, [router.query.page, router.query.search]);

  return (
    <div>
      <div className={styles["content-layout"]}>
        <SiteTitle />
      </div>
      <Navbar />
      <div className={styles["content-layout"]}>
        <PostGrid posts={posts} key={router.asPath} />
      </div>
      <div style={{ display: "grid", placeContent: "center", paddingTop: 50 }}>
        <Pagination
          total={Math.ceil(totalPosts / 8)}
          initialPage={parseInt(currentPage as string)}
          onChange={(pageNum) => handleChange(pageNum)}
        />
      </div>
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
