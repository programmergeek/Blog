import { extractPosts } from "./extractPosts";
import { client } from "../Contentful/setup";

export const getPostsByCategories = async (
  category: "Web Dev" | "Design" | "Just Me",
  skip: number
) => {
  let posts;
  const categories = {
    "Web Dev": "webDev",
    Design: "design",
    "Just Me": "justMe",
  };
  await client
    .getEntries({
      content_type: "post",
      "metadata.tags.sys.id[in]": categories[category],
      limit: 8,
      skip: skip,
    })
    .then((entreies) => {
      posts = extractPosts(entreies);
      posts = [...posts, { total: entreies.total }];
    });

  return posts;
};
