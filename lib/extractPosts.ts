import { EntryCollection } from "contentful";
import { extractPost } from "./extractPost";

/**
 *
 * @param entries
 * @returns an array of post data
 */

export const extractPosts = (entries: EntryCollection<unknown>) => {
  const posts = entries.items.map((entry) => extractPost(entry));
  return posts;
};
