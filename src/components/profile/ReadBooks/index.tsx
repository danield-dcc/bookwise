import { ElementType } from 'react'
import { Container, Subtitle, Title, Wrapper } from './styles'

interface ReadBooksProps {
  icon: ElementType
  title: string | number
  subtitle: string
}

export function ReadBooks({ icon: Icon, subtitle, title }: ReadBooksProps) {
  return (
    <Container>
      <Icon />
      <Wrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Wrapper>
    </Container>
  )
}
