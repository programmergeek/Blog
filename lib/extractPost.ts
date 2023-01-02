import { Entry } from "contentful";
/**
 * A method that separates the content of the post from the rest of the API response
 */
export const extractPost = (entry: Entry<unknown>) => {
  const fields = entry.fields as any;
  // extract the data we need from the fields propery of the response
  const post = {
    title: fields.title,
    date: new Date(fields.date).toLocaleDateString("en-GB"),
    thumbnail: {
      url: fields.thumbnail.fields.file.url,
      title: fields.thumbnail.fields.title,
    },
    body: fields.body,
    description: fields.description,
    slug: fields.slug,
    category: fields.category[0].fields,
  };
  return post;
};
