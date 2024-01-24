import Image from 'next/image'
import { Bottom, Container, Header, SubTitle, Title, Wrapper } from './styles'

import { Star } from 'phosphor-react'
import { removeStringPublic } from '@/utils/ChangeImagePath'
import { shorterTitle } from '@/utils/ShortTitle'

interface ExploreBooksCardProps {
  imageUrl: string
  title: string
  author: string
  rating: number
}

export function ExploreBooksCard({
  imageUrl,
  author,
  title,
  rating,
}: ExploreBooksCardProps) {
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
      <Image
        src={removeStringPublic(imageUrl)}
        alt=""
        width={108}
        height={152}
      />
      <Wrapper>
        <Header>
          <Title>{shorterTitle(title)}</Title>
          <SubTitle>{author}</SubTitle>
        </Header>
        <Bottom>{rating ? ratingStars(rating) : 0}</Bottom>
      </Wrapper>
    </Container>
  )
}
