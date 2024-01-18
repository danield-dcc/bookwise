import { MainList } from '@/components/main/MainList'
import { PopularBooksList } from '@/components/main/PopularBooksList'
import { SideBar } from '@/components/sidebarComponets/sidebar'
import { MainContainer } from '@/styles/pages/main'

export default function Main() {
  return (
    <MainContainer>
      <SideBar />
      <MainList />

      <PopularBooksList />
    </MainContainer>
  )
}
