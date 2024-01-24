import { styled } from '@/styles/stiches.config'

export const MainContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '235px 1fr 324px',
  gridRowStart: 'auto',
  alignItems: 'stretch',
  padding: '$5',
  gap: '6rem',

  variants: {
    columns: {
      three: {},
      two: {
        gridTemplateColumns: '235px 1fr ',
      },
    },
  },
})
