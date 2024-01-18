import { styled } from '@/styles/stiches.config'

export const HomeContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '14rem',

  img: {
    objectFit: 'cover',
    margin: 20,
  },
})

export const LoginContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  maxWidth: 372,
  width: '100%',
})

export const Title = styled('h1', {
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  color: '$gray100',
})

export const SubTitle = styled('p', {
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray200',
  marginBottom: 40,
})
