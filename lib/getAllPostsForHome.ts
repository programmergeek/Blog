import { client } from "../Contentful/setup";
import { extractPost } from "./extractPost";
import { getAllPosts } from "./getAllPosts";
/**
 * a method that gets the newest higlighted post, as well as the latest posts
 */

export const getAllPostsForHome = async () => {
  // Retrieve the latest highlighted post as well as the latest 8 posts
  const posts = await getAllPosts();
  let highlightedPost;
  await client
    .getEntries({
      content_type: "post",
      "fields.highlight": true,
    })
    .then((entry) => {
      highlightedPost = extractPost(entry.items[0]);
    });

  return { highlightedPost, posts };
};
