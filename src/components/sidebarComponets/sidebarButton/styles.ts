import { styled } from '@/styles/stiches.config'
import { motion } from 'framer-motion'

export const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',

  margin: '0 auto 1rem 3rem',
  border: 'none',
  background: 'transparent',
  position: 'relative',
  cursor: 'pointer',

  '&:focus, &:hover': {
    p: {
      color: '$gray100',
    },

    svg: {
      color: '$gray100',
    },
  },

  svg: {
    color: '$gray300',
    height: 19.5,
    width: 16.5,
    marginRight: '$3',
  },

  p: {
    fontSize: '$md',
    fontWeight: '$bold',
    lineHeight: '$base',
    color: '$gray300',
  },
})

export const SelectButtonIndicator = styled(motion.div, {
  display: 'block',
  width: 4,
  height: 24,
  background: '$gradient_vertical',
  borderRadius: 5,
  marginRight: '$4',
})

export const EmptySelectButtonIndicator = styled(SelectButtonIndicator, {
  background: 'none',
})
