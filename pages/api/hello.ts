// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getPostBySlug } from "../../lib";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(await getPostBySlug("an-intro-to-typescript"));
}
