import type { NextApiRequest, NextApiResponse } from 'next'

let visitorCount = 0;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ count: number }>
) {
  visitorCount++;
  res.status(200).json({ count: visitorCount });
}