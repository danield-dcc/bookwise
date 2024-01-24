import { styled } from '@/styles/stiches.config'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const RadioGroupRoot = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'row',
  gap: 10,
  marginTop: '2.375rem',
})

export const RadioGroupItem = styled(RadioGroup.Item, {
  all: 'unset',
  backgroundColor: 'transparent',
  minWidth: 25,
  height: 34,
  padding: '4px 16px',
  borderRadius: '$full',
  border: '1px solid $purple100',

  '&:hover': {
    backgroundColor: '$purple200',
    cursor: 'pointer',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$purple200',
    border: '1px solid $purple200',

    p: {
      color: '$gray100',
    },
  },
})

export const ItemContent = styled('p', {
  position: 'relative',
  color: '$purple100',
})

export const RadioGroupIndicator = styled(RadioGroup.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: '$gray500',
  },
})

export const Flex = styled('div', { display: 'flex' })
