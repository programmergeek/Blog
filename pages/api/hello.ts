// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "contentful";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = createClient({
    space: "p8y3eldp3r1s",
    accessToken: "hhHzyqlJVFuVo1VMTg2e5nG9XQhvtzRiSF9z-rglG3s",
  });

  res.status(200).json(
    client
      .getEntry("mLWTEKibiJ7HQlVnWrOBP")
      .then((entry) => entry)
      .catch(console.error)
  );
}
