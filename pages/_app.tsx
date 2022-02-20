import { AppProps, } from 'next/app'
import { LazyMotion, domAnimation, } from 'framer-motion'

import '../styles/globals.css'

export default function App({ Component, pageProps, }: AppProps) {
  return (
    <>
      <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />
      <LazyMotion features={domAnimation} strict={true}>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  )
}