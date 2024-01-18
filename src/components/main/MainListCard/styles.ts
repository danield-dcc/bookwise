import { styled } from '@/styles/stiches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$4',
  padding: '$6',

  height: 280,
  maxWidth: 608,
  width: '100%',
  background: '$gray700',
  borderRadius: '8px',
})

export const CardHeader = styled('div', {
  display: 'flex',

  img: {
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '$full',

    marginTop: '1.5px',
    marginLeft: '1px',

    background:
      'linear-gradient(white, white) padding-box, $gradient_horizontal border-box;',
    border: '2px solid transparent',
  },
})

export const CardHeaderUser = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
})

export const CardHeaderNameAndDay = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '$4',

  p: {
    fontSize: '$md',
    fontWeight: '$regular',
    lineHeight: '$base',
    color: '$gray100',
  },

  span: {
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
    color: '$gray400',
  },
})

export const CardHeaderReview = styled('div', {
  display: 'flex',
  marginLeft: 'auto',
  gap: '$1',
})

export const CardBody = styled('div', {
  display: 'flex',
  marginTop: '$8',
  overflow: 'hidden',

  img: {
    borderRadius: '4px',
    objectFit: 'cover',
  },
})

export const BodyImage = styled('div', {
  display: 'block',
})

export const BodyContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '$5',
})

export const CardBodyTitle = styled('p', {
  fontSize: '$md',
  fontWeight: '$bold',
  lineHeight: '$short',
  color: '$gray100',
})

export const CardBodySubtitle = styled('p', {
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray400',
})

export const CardBodyContent = styled('p', {
  marginTop: '$5',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray300',
})
