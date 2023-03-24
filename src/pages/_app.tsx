import { type AppType } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { Nunito } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

import { api } from '~/utils/api'

import '~/styles/globals.css'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })
config.autoAddCss = false

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <main className={`${nunito.variable} font-sans`}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  )
}

export default api.withTRPC(MyApp)
