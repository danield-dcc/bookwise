import { styled } from '@/styles/stiches.config'

export const Container = styled('div', {
  display: 'flex',
  background: '$gray700',
  padding: '$4 $5',
  maxWidth: '318px',
  width: '100%',
  borderRadius: '8px',
  gap: '$5',

  img: {
    display: 'block',
    objectFit: 'cover',
    width: 108,
    height: 152,
    borderRadius: '4px',
  },
})

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Bottom = styled('div', {
  display: 'flex',
})
