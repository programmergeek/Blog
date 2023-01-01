// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getPostBySlug } from "../../lib";
import { getAllPostsForHome } from "../../lib/getAllPostsForHome";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(await getAllPostsForHome());
}
