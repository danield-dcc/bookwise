import { styled } from '@/styles/stiches.config'

export const Container = styled('div', {
  display: 'flex',
  marginTop: '$4',
  padding: '1.125rem 1.5rem',
  gap: '$5',

  background: '$gray700',
  height: '8.125rem',
  maxWidth: '20.25rem',
  width: '100%',
  borderRadius: '8px',

  img: {
    height: 94,
    width: 64,
    objectFit: 'cover',
    borderRadius: '4px',
  },
})

export const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled('p', {
  fontSize: '$md',
  fontWeight: '$bold',
  lineHeight: '$short',
  color: '$gray100',
})

export const SubTitle = styled('p', {
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray400',
})

export const Review = styled('span', {
  marginTop: 'auto',
})
