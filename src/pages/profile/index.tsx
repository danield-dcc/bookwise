import { useState } from 'react'
import { SidebarUserTemplate } from '@/template/SideBarUserTemplate'
import { Container, InputWrapper, Title } from './style'
import { User, MagnifyingGlass } from 'phosphor-react'
import { ProfileBooksCard } from '@/components/profile/ProfileBooksCard'
import { ProfileSideBar } from '@/components/profile/ProfileSideBar'

export default function Profile() {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur() {
    setIsFocused(false)
  }
  return (
    <SidebarUserTemplate>
      <Container>
        <Title>
          <User />
          <p>Perfil</p>
        </Title>

        <InputWrapper className={`${isFocused ? 'highlight-border' : ''}`}>
          <input
            placeholder="Buscar livro avaliado"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <MagnifyingGlass
            className={`${isFocused ? 'highlight-border' : ''}`}
          />
        </InputWrapper>

        <ProfileBooksCard />
      </Container>

      <ProfileSideBar />
    </SidebarUserTemplate>
  )
}
