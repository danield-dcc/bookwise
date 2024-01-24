import { SidebarUserTemplate } from '@/template/SideBarUserTemplate'
import {
  BooksWrapper,
  Container,
  Explorer,
  HeaderContent,
  InputContent,
} from './style'
import { Binoculars } from 'phosphor-react'

import { SearchInput } from '@/components/Input/SearchInput'
import { SelectRadioGroup } from '@/components/Input/RadioGroup'
import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'

import { ExploreBooksCard } from '@/components/explore/ExploreBooksCard'

const RadioGroupItems = [
  { value: 'default', name: 'Tudo' },
  { value: 'computing', name: 'Computação' },
  { value: 'education', name: 'Educação' },
  { value: 'fantasy', name: 'Fantasia' },
  { value: 'science_fiction', name: 'Ficção científica' },
  { value: 'horror', name: 'Horror' },
  { value: 'hq', name: 'HQs' },
  { value: 'thriller', name: 'Suspense' },
]
interface ListAllBooksProps {
  id: string
  name: string
  author: string
  cover_url: string
  avg_rating: number
}

export default function Explore() {
  const [allBooks, setAllBooks] = useState<ListAllBooksProps[]>()
  // TODO: use feachParams

  useEffect(() => {
    api.get('/books/list-all-book-whit-ranking').then((books) => {
      console.log(books)
      setAllBooks(books.data)
    })
  }, [])

  return (
    <SidebarUserTemplate column="two">
      <Container>
        <HeaderContent>
          <Explorer>
            <Binoculars />
            <p>Explorar</p>
          </Explorer>

          <InputContent>
            <SearchInput placeholder="Buscar livro ou autor" />
          </InputContent>
        </HeaderContent>

        <SelectRadioGroup radioItems={RadioGroupItems} />

        <BooksWrapper>
          {allBooks?.map((book) => (
            <ExploreBooksCard
              key={book.id}
              title={book.name}
              author={book.author}
              imageUrl={book.cover_url}
              rating={book.avg_rating}
            />
          ))}
        </BooksWrapper>
      </Container>
    </SidebarUserTemplate>
  )
}
