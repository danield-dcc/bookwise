import Image from 'next/image'
import {
  Container,
  HeaderContent,
  UserName,
  Subtitle,
  Separator,
} from './styles'
import { ReadBooks } from '../ReadBooks'
import { Book, Books, UserList, BookmarkSimple } from 'phosphor-react'

export function ProfileSideBar() {
  return (
    <Container>
      <HeaderContent>
        <Image
          src={'https://github.com/danield-dcc.png'}
          width={72}
          height={72}
          alt=""
        />
        <UserName>Daniel Conceição</UserName>
        <Subtitle>Membro desde 2019</Subtitle>
        <Separator />
      </HeaderContent>

      <ReadBooks icon={Book} title="853" subtitle="Páginas lidas" />
      <ReadBooks icon={Books} title="3" subtitle="Livros avaliados" />
      <ReadBooks icon={UserList} title="3" subtitle="Autores lidos" />
      <ReadBooks
        icon={BookmarkSimple}
        title="Horror"
        subtitle="Categoria mais lida"
      />
    </Container>
  )
}
