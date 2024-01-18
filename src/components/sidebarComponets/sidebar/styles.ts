import { styled } from '@/styles/stiches.config'

export const SideBarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 232,
  width: '100%',
  height: 988,
  backgroundImage: "url('/background-sidebar.png')",
  borderRadius: '$md',

  img: {
    margin: '40px 52px 64px 52px',
  },
})
