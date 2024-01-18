import { styled } from '@/styles/stiches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 146,
})

export const HeaderList = styled('div', {
  display: 'flex',
  height: 30,
  width: '100%',

  alignItems: 'center',
  justifyContent: 'space-between',

  p: {
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
    color: '$gray100',
  },
})

export const SeeAllButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.187rem',
  color: '$purple100',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',

  fontSize: '$sm',
  fontWeight: '$bold',
  lineHeight: '$base',
})
