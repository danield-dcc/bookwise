import { Dispatch, ElementType, SetStateAction } from 'react'
import {
  Container,
  EmptySelectButtonIndicator,
  SelectButtonIndicator,
} from './styles'

interface ISidebarButtonProps {
  icon: ElementType
  text: string
  isSelected?: boolean
  buttonId: number
  selectButtonId: Dispatch<SetStateAction<number>>
}

export function SidebarButton({
  icon: Icon,
  text,
  isSelected = true,
  buttonId,
  selectButtonId,
}: ISidebarButtonProps) {
  function setButtonId() {
    selectButtonId(buttonId)
  }

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
