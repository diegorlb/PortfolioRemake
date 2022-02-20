import { AppProps, } from 'next/app'
import { LazyMotion, domAnimation, } from 'framer-motion'

import '../styles/globals.css'

export default function App({ Component, pageProps, }: AppProps) {
  return (
    <>
      <LazyMotion features={domAnimation} strict={true}>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  )
}