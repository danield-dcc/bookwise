import { styled } from '@/styles/stiches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '8rem',
  maxWidth: '308px',
  width: '100%',
  height: '555px',

  borderLeft: '1px solid $gray500',

  img: {
    width: 72,
    height: 72,
    objectFit: 'cover',
    borderRadius: '$full',

    marginTop: '1.5px',
    marginLeft: '1px',
    marginRight: '12px',

    background:
      'linear-gradient(white, white) padding-box, $gradient_horizontal border-box;',
    border: '2px solid transparent',
  },
})

export const HeaderContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const UserName = styled('p', {
  marginTop: '1.25rem',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$short',
  color: '$gray100',
})

export const Subtitle = styled('p', {
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray400',
})

export const Separator = styled('div', {
  display: 'block',
  width: 32,
  height: 4,
  background: '$gradient_horizontal',
  borderRadius: 5,
  marginRight: '$4',

  margin: '2rem auto 1rem auto',
})
