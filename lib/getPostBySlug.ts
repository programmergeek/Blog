import { client } from "../Contentful/setup";
import { extractPost } from "./extractPost";

export const getPostBySlug = async (slug: string) => {
  let data;
  await client
    .getEntries({
      content_type: "post",
      "fields.slug": slug,
    })
    .then((entry) => {
      data = extractPost(entry.items[0]);
    })
    .catch(console.error);
  return data;
};
