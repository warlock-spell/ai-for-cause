// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sanityClient from "@sanity/client"
import type { NextApiRequest, NextApiResponse } from "next"

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASSET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
}

const client = sanityClient(config)

export default function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ name: "John Doe" })
}
