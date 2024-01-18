import { useRouter } from 'next/router'
import { Container } from './styled'
import { SignIn } from 'phosphor-react'

export function SidebarLoginButton() {
  const router = useRouter()
  return (
    <Container onClick={() => router.push('/')}>
      <p>Fazer login</p>
      <SignIn />
    </Container>
  )
}
