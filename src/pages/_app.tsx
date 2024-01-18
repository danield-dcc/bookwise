import { SessionProvider } from 'next-auth/react'
import { globalStyles } from '@/styles/global'
// eslint-disable-next-line camelcase
import { Nunito_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'
import { Container } from '@/styles/pages/app'

const nunito = Nunito_Sans({
  style: ['italic', 'normal'],
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
})

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Container className={nunito.className}>
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
  )
}
