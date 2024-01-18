import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const allUsers = await prisma.user.findMany()

  if (!allUsers) {
    return res.status(400).json({ message: 'No user found' })
  }

  return res.status(200).json(allUsers)
}
