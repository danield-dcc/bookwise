import { SignOut as SignOutSVG } from 'phosphor-react'
import { Container } from './styles'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'

export function SidebarLogoffButton() {
  const { data: session } = useSession()

  function sigOffUser() {
    signOut()
  }

  function sorterName(userName: string | undefined | null) {
    if (userName) {
      const sortName = userName.split(' ')
      return sortName[0]
    }
    return userName
  }

  return (
    <Container onClick={sigOffUser}>
      <Image
        src={'https://github.com/danield-dcc.png'}
        width={32}
        height={32}
        alt=""
      />

      <div>
        <p>{sorterName(session?.user?.name)}</p>
      </div>
      <SignOutSVG color="#F75A68" width={20} height={20} />
    </Container>
  )
}
