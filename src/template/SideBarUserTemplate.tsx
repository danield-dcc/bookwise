import { SideBar } from '@/components/sidebarComponets/sidebar'
import { MainContainer } from './styles'
// import { MainContainer } from '@/styles/pages/main'

interface SidebarUserTemplateProps {
  children: React.ReactNode
  column?: 'three' | 'two'
}

export function SidebarUserTemplate({
  children,
  column = 'three',
}: SidebarUserTemplateProps) {
  return (
    <MainContainer columns={column}>
      <SideBar />
      {children}
    </MainContainer>
  )
}
