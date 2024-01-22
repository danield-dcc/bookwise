import { Dispatch, ElementType, SetStateAction } from 'react'
import {
  Container,
  EmptySelectButtonIndicator,
  SelectButtonIndicator,
} from './styles'
import { useRouter } from 'next/router'

interface ISidebarButtonProps {
  icon: ElementType
  text: string
  isSelected?: boolean
  buttonId: number
  route: string
  selectButtonId: Dispatch<SetStateAction<number>>
}

export function SidebarButton({
  icon: Icon,
  text,
  isSelected = true,
  buttonId,
  selectButtonId,
  route,
}: ISidebarButtonProps) {
  const router = useRouter()
  function setButtonId() {
    router.push(route)
    selectButtonId(buttonId)
  }

  console.log('isSelected', isSelected)

  return (
    <Container onClick={setButtonId}>
      {isSelected ? (
        <SelectButtonIndicator layoutId="activeTab" />
      ) : (
        <EmptySelectButtonIndicator />
      )}

      <Icon />
      <p>{text}</p>
    </Container>
  )
}
