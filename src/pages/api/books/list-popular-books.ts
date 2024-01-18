import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const booksWithRating = await prisma.$queryRaw`
   SELECT *, ratings.rate,
    AVG(ratings.rate) AS avg_rating
   FROM books
   JOIN ratings ON books.id=ratings.book_id
    GROUP BY books.id
    ORDER BY avg_rating DESC
    LIMIT 5
   `

  if (!booksWithRating) {
    return res.status(400).json({ message: 'No book found' })
  }

  return res.status(200).json(booksWithRating)
}
