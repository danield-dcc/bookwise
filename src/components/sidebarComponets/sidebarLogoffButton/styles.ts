import { styled } from '@/styles/stiches.config'

export const Container = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',

  margin: 'auto auto 5rem 4rem',
  border: 'none',
  background: 'transparent',

  position: 'relative',
  cursor: 'pointer',

  img: {
    position: 'absolute',
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '$full',

    marginTop: '1.5px',
    marginLeft: '1px',
    marginRight: '12px',

    background:
      'linear-gradient(white, white) padding-box, $gradient_horizontal border-box;',
    border: '2px solid transparent',
  },
  p: {
    position: 'absolute',
    fontSize: '$md',
    fontWeight: '$bold',
    lineHeight: '$base',
    color: '$gray300',
    marginLeft: '$8',
    marginTop: '$2',
  },

  '&:hover': {
    p: {
      color: '$gray100',
    },
  },

  svg: {
    position: 'absolute',

    height: 20,
    width: 20,
    marginTop: '$3',
    marginLeft: '230px',
  },
})
