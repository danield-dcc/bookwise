import { useEffect, useState } from 'react'
import { PopularBooksCard } from '../PopularBooksCard'
import { Container, HeaderList, SeeAllButton } from './styles'
import { CaretRight } from 'phosphor-react'
import { api } from '@/lib/axios'

interface ListAllBooksProps {
  id: string
  name: string
  author: string
  cover_url: string
  avg_rating: number
}

export function PopularBooksList() {
  const [allPopularBooks, setAllPopularBooks] = useState<ListAllBooksProps[]>()

  async function getPopularBooks() {
    const popularBooks = await api.get('/books/list-popular-books')
    setAllPopularBooks(popularBooks.data)
  }
  useEffect(() => {
    getPopularBooks()
  }, [])
  return (
    <Container>
      <HeaderList>
        <p>Livros populares</p>
        <SeeAllButton>
          Ver todos
          <CaretRight />
        </SeeAllButton>
      </HeaderList>

      {allPopularBooks?.map((book) => (
        <PopularBooksCard
          key={book.id}
          author={book.author}
          name={book.name}
          coverUrl={book.cover_url}
          rating={book.avg_rating}
        />
      ))}
    </Container>
  )
}
