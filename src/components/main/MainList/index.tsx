import { useEffect, useState } from 'react'
import { MainListCard } from '../MainListCard'
import { Container, Subtitle, Title } from './styles'
import { ChartLineUp } from 'phosphor-react'
import { api } from '@/lib/axios'

interface ListBooksProps {
  id: string
  name: string
  author: string
  cover_url: string
  summary: string
}

export function MainList() {
  const [allBooks, setAllBooks] = useState<ListBooksProps[]>()
  // TODO: use feachParams
  async function getUsers() {
    const books = await api.get('/books/list-all-books')
    console.log(books)
    setAllBooks(books.data)
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Container>
      <Title>
        <ChartLineUp />
        <p>Início</p>
      </Title>
      <Subtitle>Avaliações mais recentes</Subtitle>

      {allBooks?.map((book) => (
        <MainListCard
          key={book?.id}
          author={book?.author}
          coverUrl={book.cover_url}
          summary={book?.summary}
          title={book?.name}
        />
      ))}
    </Container>
  )
}
