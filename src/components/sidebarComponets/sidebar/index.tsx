import Image from 'next/image'
import { SideBarContainer } from './styles'

import bookwiseLogo from '@/assets/sidebar/bookwise-logo.svg'
import { SidebarButton } from '../sidebarButton'
import { ChartLineUp, Binoculars, User } from 'phosphor-react'
import { useState } from 'react'
import { SidebarLoginButton } from '../sidebarLoginButton'
import { useSession } from 'next-auth/react'
import { SidebarLogoffButton } from '../sidebarLogoffButton'

const selectButtonOptions = [
  {
    id: 0,
    icon: ChartLineUp,
    text: 'Início',
    pageRoute: '/main',
  },
  {
    id: 1,
    icon: Binoculars,
    text: 'Explorar',
    pageRoute: '/explore',
  },
  {
    id: 2,
    icon: User,
    text: 'Perfil',
    pageRoute: '/profile',
  },
]

export function SideBar() {
  const { data: session } = useSession()
  const [isSelectedButton, setIsSelectedButton] = useState(0)

  function getSideBarList() {
    if (session?.user?.name) {
      return selectButtonOptions.map((option) => (
        <SidebarButton
          key={option.id}
          icon={option.icon}
          text={option.text}
          isSelected={isSelectedButton === option.id}
          buttonId={option.id}
          selectButtonId={setIsSelectedButton}
          route={option.pageRoute}
        />
      ))
    }

    if (!session?.user?.name) {
      const newList = selectButtonOptions.filter((list) => list.id !== 2)
      return newList.map((option) => (
        <SidebarButton
          key={option.id}
          icon={option.icon}
          text={option.text}
          isSelected={isSelectedButton === option.id}
          buttonId={option.id}
          selectButtonId={setIsSelectedButton}
          route={option.pageRoute}
        />
      ))
    }
  }

  return (
    <SideBarContainer>
      <Image src={bookwiseLogo} width={128} height={32} alt="" />

      {getSideBarList()}

      {session?.user?.name ? <SidebarLogoffButton /> : <SidebarLoginButton />}
    </SideBarContainer>
  )
}
