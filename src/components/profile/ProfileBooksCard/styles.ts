import { styled } from '@/styles/stiches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '$gray700',
  padding: '$6',
  maxWidth: '624px',
  width: '100%',
  borderRadius: '$md',

  img: {
    width: '98px',
    height: '134px',
  },
})

export const Wrapper = styled('div', {
  marginTop: '32px',
  '& > p': {
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
    color: '$gray300',
    marginBottom: '$2',
  },
})

export const RatingStars = styled('div', {
  display: 'flex',
  marginTop: 'auto',

  svg: {
    color: '$purple200',
    width: '1rem',
    height: '1rem',
  },
})

export const HeaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
})

export const HeaderItems = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '$6',
})

export const BookTitle = styled('p', {
  fontSize: '$md',
  fontWeight: '$bold',
  lineHeight: '$short',
  color: '$gray100',
})

export const BookAuthor = styled('p', {
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray400',
})

export const BookResume = styled('p', {
  marginTop: '$6',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray300',
})
