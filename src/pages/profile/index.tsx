import { SidebarUserTemplate } from '@/template/SideBarUserTemplate'
import { Container, Title } from './style'
import { User } from 'phosphor-react'
import { ProfileBooksCard } from '@/components/profile/ProfileBooksCard'
import { ProfileSideBar } from '@/components/profile/ProfileSideBar'
import { SearchInput } from '@/components/Input/SearchInput'

export default function Profile() {
  return (
    <SidebarUserTemplate>
      <Container>
        <Title>
          <User />
          <p>Perfil</p>
        </Title>

        <SearchInput placeholder="Buscar livro avaliado" />

        <ProfileBooksCard />
      </Container>

      <ProfileSideBar />
    </SidebarUserTemplate>
  )
}
