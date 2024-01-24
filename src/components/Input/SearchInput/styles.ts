import { styled } from '@/styles/stiches.config'

export const InputWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid $gray500',
  borderRadius: '4px',

  svg: {
    marginLeft: 'auto',
    color: '$gray500',
    height: 20,
    width: 20,
    marginRight: '$3',
  },

  input: {
    background: 'transparent',
    width: '80%',
    padding: '$4',
    color: '$gray400',
    border: 'none',
    textDecoration: 'none',
    outline: 'none',
  },

  '&.highlight-border': {
    border: '1px solid $green200',
    svg: {
      color: '$green200',
    },
  },
})
