import Image from 'next/image'
import { SideBarContainer } from './styles'

import bookwiseLogo from '@/assets/sidebar/bookwise-logo.svg'
import { SidebarButton } from '../sidebarButton'
import { ChartLineUp, Binoculars } from 'phosphor-react'
import { useState } from 'react'
import { SidebarLoginButton } from '../sidebarLoginButton'
import { useSession } from 'next-auth/react'
import { SidebarLogoffButton } from '../sidebarLogoffButton'

const SelectButtonOptions = [
  {
    id: 0,
    icon: ChartLineUp,
    text: 'Início',
  },
  {
    id: 1,
    icon: Binoculars,
    text: 'Explorar',
  },
]

export function SideBar() {
  const { data: session } = useSession()
  const [isSelectedButton, setIsSelectedButton] = useState(0)

  return (
    <SideBarContainer>
      <Image src={bookwiseLogo} width={128} height={32} alt="" />

      {SelectButtonOptions.map((option) => (
        <SidebarButton
          key={option.id}
          icon={option.icon}
          text={option.text}
          isSelected={isSelectedButton === option.id}
          buttonId={option.id}
          selectButtonId={setIsSelectedButton}
        />
      ))}

      {session?.user?.name ? <SidebarLogoffButton /> : <SidebarLoginButton />}
    </SideBarContainer>
  )
}
