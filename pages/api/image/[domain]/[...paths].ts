import type { NextApiRequest, NextApiResponse } from "next";

// https://github.com/vercel/next.js/issues/20109
export const config = { api: { bodyParser: false } }

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { domain, paths } = req.query;

  const path = Array.isArray(paths) ? paths.join('/') : paths;

  const r = await fetch(`http://${domain}/${path}`);
  const buffer = await r.arrayBuffer();

  res.setHeader('Cache-Control', 'public, s-maxage=2628000');
  res.write(Buffer.from(buffer));
  res.status(200).end();
};
