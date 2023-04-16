import { extractPosts } from "./extractPosts";
import { client } from "../Contentful/setup";

export const getPostsByCategories = async (category: string, skip: number) => {
  let posts;
  await client
    .getEntries({
      content_type: "post",
      "metadata.tags.sys.id[in]": category,
      limit: 8,
      skip: skip,
    })
    .then((entreies) => {
      posts = extractPosts(entreies);
      posts = [...posts, { total: entreies.total }];
    });

  return posts as any;
};
