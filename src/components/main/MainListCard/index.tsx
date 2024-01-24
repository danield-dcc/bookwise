import { removeStringPublic } from '@/utils/ChangeImagePath'
import {
  BodyContent,
  CardBody,
  CardBodyContent,
  CardBodySubtitle,
  CardBodyTitle,
  CardHeader,
  CardHeaderNameAndDay,
  CardHeaderReview,
  CardHeaderUser,
  Container,
} from './styles'
import Image from 'next/image'
import { Star } from 'phosphor-react'

interface MainListCardProps {
  title: string
  author: string
  coverUrl: string
  summary: string
}

export function MainListCard({
  author,
  coverUrl,
  summary,
  title,
}: MainListCardProps) {
  return (
    <Container>
      <CardHeader>
        <CardHeaderUser>
          <Image
            src={'https://github.com/danield-dcc.png'}
            width={40}
            height={40}
            alt=""
          />

          <CardHeaderNameAndDay>
            <p>Daniel Conceição</p>
            <span>Hoje</span>
          </CardHeaderNameAndDay>

          <CardHeaderReview>
            <Star weight="fill" color="#8381D9" />
            <Star weight="fill" color="#8381D9" />
            <Star weight="fill" color="#8381D9" />
            <Star weight="fill" color="#8381D9" />
            <Star />
          </CardHeaderReview>
        </CardHeaderUser>
      </CardHeader>

      <CardBody>
        <Image
          src={removeStringPublic(coverUrl)}
          alt=""
          width={108}
          height={152}
        />
        <BodyContent>
          <CardBodyTitle>{title}</CardBodyTitle>
          <CardBodySubtitle>{author}</CardBodySubtitle>

          <CardBodyContent>{summary}</CardBodyContent>
        </BodyContent>
      </CardBody>
    </Container>
  )
}
