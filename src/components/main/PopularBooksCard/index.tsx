import Image from 'next/image'
import { CardContent, Container, Review, SubTitle, Title } from './styles'
import { Star } from 'phosphor-react'
import { removeStringPublic } from '@/utils/ChangeImagePath'

interface PopularBooksCardProps {
  name: string
  author: string
  rating: number
  coverUrl: string
}

export function PopularBooksCard({
  author,
  coverUrl,
  name,
  rating,
}: PopularBooksCardProps) {
  function ratingStars(rate: number) {
    const filledStar = Array.from({ length: rate }).map((_, i) => (
      <Star key={i} weight="fill" color="#8381D9" />
    ))

    const hollowStart = Array.from({ length: 5 - Math.floor(rate) }).map(
      (_, i) => <Star key={i} color="#8381D9" />,
    )

    return [...filledStar, ...hollowStart]
  }

  return (
    <Container>
      <Image src={removeStringPublic(coverUrl)} alt="" height={94} width={64} />
      <CardContent>
        <Title>{name}</Title>
        <SubTitle>{author}</SubTitle>

        <Review>{rating ? ratingStars(rating) : 0}</Review>
      </CardContent>
    </Container>
  )
}
