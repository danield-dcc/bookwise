import { useSession, signIn } from 'next-auth/react'
import Image from 'next/image'
import { LoginButtonContainer } from './styles'
import { useRouter } from 'next/router'

interface ILoginButtonProps {
  text: string
  img: string
}

export function LoginButton({ img, text }: ILoginButtonProps) {
  const router = useRouter()
  const { data: session } = useSession()

  console.log('session', session)

  function loginSection() {
    if (text === 'Entrar com GitHub') signIn('github', { callbackUrl: '/main' })
    if (text === 'Acessar como visitante') router.push('/main')
  }

  return (
    <LoginButtonContainer onClick={loginSection}>
      <Image src={img} width={32} height={32} alt="" />
      <p>{text}</p>
    </LoginButtonContainer>
  )
}
