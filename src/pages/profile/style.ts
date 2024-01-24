import { styled } from '@/styles/stiches.config'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '52px',
  marginBottom: '40px',

  svg: {
    color: '$green100',
    height: 32,
    width: 32,
    marginRight: '$3',
  },

  p: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    lineHeight: '$short',
    color: '$gray100',
  },
})

export const Subtitle = styled('p', {
  marginTop: '2.5rem',

  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray100',
})
