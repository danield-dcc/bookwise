import Image from 'next/image'
import {
  BookAuthor,
  BookResume,
  BookTitle,
  Container,
  HeaderItems,
  HeaderWrapper,
  RatingStars,
  Wrapper,
} from './styles'
import Book from '../../../../public/images/books/entendendo-algoritmos.jpg'
import { Star } from 'phosphor-react'

export function ProfileBooksCard() {
  return (
    <Wrapper>
      <p>Há 2 dias</p>
      <Container>
        <HeaderWrapper>
          <Image src={Book} alt="" />
          <HeaderItems>
            <BookTitle>Entendendo Algoritmos</BookTitle>
            <BookAuthor>Aditya Bhargava</BookAuthor>

            <RatingStars>
              <Star weight="fill" />
              <Star weight="fill" />
            </RatingStars>
          </HeaderItems>
        </HeaderWrapper>
        <BookResume>
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
          curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
          elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque.
        </BookResume>
      </Container>
    </Wrapper>
  )
}
