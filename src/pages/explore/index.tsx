import { ProfileContainer } from '@/styles/pages/profile'
import { SidebarUserTemplate } from '@/template/SideBarUserTemplate'
const RadioGroupItems = [
  { value: 'default', name: 'Tudo' },
  { value: 'computing', name: 'Computação' },
  { value: 'education', name: 'Educação' },
  { value: 'fantasy', name: 'Fantasia' },
  { value: 'science_fiction', name: 'Ficção científica' },
  { value: 'horror', name: 'Horror' },
  { value: 'hq', name: 'HQs' },
  { value: 'thriller', name: 'Suspense' },
]

export default function Explore() {
  return (
        <SelectRadioGroup radioItems={RadioGroupItems} />
    </SidebarUserTemplate>
  )
}
