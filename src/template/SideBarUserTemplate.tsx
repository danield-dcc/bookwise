import { SideBar } from '@/components/sidebarComponets/sidebar'
import { MainContainer } from './styles'
// import { MainContainer } from '@/styles/pages/main'

export function SidebarUserTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MainContainer>
      <SideBar />
      {children}
    </MainContainer>
  )
}
