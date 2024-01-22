import { styled } from '@/styles/stiches.config'

export const Container = styled('div', {
  display: 'flex',

  padding: '20px 56px',

  alignItems: 'center',
  gap: 20,

  svg: {
    width: 32,
    height: 32,
    color: '$green200',
  },
})

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled('p', {
  fontSize: '$md',
  fontWeight: '$bold',
  lineHeight: '$short',
  color: '$gray200',
})

export const Subtitle = styled('p', {
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray300',
})
