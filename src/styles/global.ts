import { globalCss } from '@/styles/stiches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray300',
    '-webkit-font-smoothing': 'antialiased',
  },
})
