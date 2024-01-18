import { styled } from '@/styles/stiches.config'

export const LoginButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  backgroundColor: '$gray600',
  borderRadius: '$md',

  maxWidth: 372,
  width: '100%',
  height: 72,
  gap: 20,
  marginBottom: '1rem',

  '&:hover': {
    backgroundColor: '$gray700',
    cursor: 'pointer',
  },

  img: {
    margin: '20px 0 20px 24px',
  },

  p: {
    fontSize: '$lg',
    fontWeight: '$bold',
    lineHeight: '$base',
    color: '$gray200',
  },
})
