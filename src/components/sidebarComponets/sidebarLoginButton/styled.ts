import { styled } from '@/styles/stiches.config'

export const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',

  margin: 'auto auto 1.5rem 3rem',
  border: 'none',
  background: 'transparent',

  '&:focus, &:hover': {
    p: {
      color: '$gray100',
    },
  },

  svg: {
    color: '$green100',
    height: 19.5,
    width: 16.5,
    marginRight: '$3',
  },

  p: {
    fontSize: '$md',
    fontWeight: '$bold',
    lineHeight: '$base',
    color: '$gray300',
    marginRight: '$3',
  },
})
