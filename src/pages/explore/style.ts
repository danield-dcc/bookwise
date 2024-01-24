import { styled } from '@/styles/stiches.config'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
})

export const HeaderContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '72px',
})

export const Explorer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '& > svg': {
    color: '$green100',
    width: 32,
    height: 32,
    marginRight: '12px',
  },

  p: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    lineHeight: '$short',
    color: '$gray100',
  },
})

export const InputContent = styled('div', {
  maxWidth: '433px',
  width: '100%',
})

export const BooksWrapper = styled('div', {
  display: 'grid',
  marginTop: '48px',
  gridTemplateColumns: '1fr 1fr 1fr',
  paddingBottom: '$4',
  rowGap: '$5',
})
