import { EntryCollection } from "contentful";
/**
 * A method that separates the content of the post from the rest of the API response
 */
export const extractPost = (entry: EntryCollection<unknown>) => {
  const fields = entry.items[0].fields as any;
  // extract the data we need from the fields propery of the response
  const post = {
    title: fields.title,
    date: fields.date,
    thumbnail: {
      url: fields.thumbnail.fields.file.url,
      title: fields.thumbnail.fields.title
    },
    body: fields.body,
    description: fields.description,
    slug: fields.slug,
    category: fields.category[0].fields
  };
  return post;
};
