import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const allBooks = await prisma.book.findMany()

  if (!allBooks) {
    return res.status(400).json({ message: 'No book found' })
  }

  return res.status(200).json(allBooks)
}
