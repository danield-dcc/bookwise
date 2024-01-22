import { styled } from '@/styles/stiches.config'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 52,

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

export const InputWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid $gray500',
  borderRadius: '4px',
  marginTop: '40px',

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

// export const SearchInput = styled('input', {
//   background: 'transparent',
//   width: '80%',
//   padding: '$4',
//   color: '$gray400',
//   border: 'none',
//   textDecoration: 'none',
//   outline: 'none',
// })

export const Subtitle = styled('p', {
  marginTop: '2.5rem',

  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray100',
})
