import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPosts } from "../../lib/getAllPosts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(await getAllPosts(undefined, req.body));
}
