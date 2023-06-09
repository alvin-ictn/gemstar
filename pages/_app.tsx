import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
const nunitofont = Nunito({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <main className={nunitofont.className}>
    <Component {...pageProps} />
  </main>
}
