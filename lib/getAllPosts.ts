import { client } from "../Contentful/setup";
import { extractPosts } from "./extractPosts";

/**
 * A function that returns all posts
 */
export const getAllPosts = async (limit = 8, skip = 0) => {
  let posts;
  await client
    .getEntries({
      content_type: "post",
      limit: limit,
      skip: skip,
    })
    .then((entreies) => {
      posts = extractPosts(entreies);
      posts = [...posts, { total: entreies.total }];
    });

  return posts;
};
