import { mintB3tr } from '@/utils/mintB3tr';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
      const amount = req.query.amount as string;
      const address = req.query.address as string;
      await mintB3tr(address, amount);
  
      res.status(200).json({ success: true });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message });
    }
}
