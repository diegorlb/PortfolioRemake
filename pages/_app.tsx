import { AppProps, } from 'next/app'
import Head from 'next/head'
import { LazyMotion, domAnimation, AnimatePresence, } from 'framer-motion'
import useIsClient from '../hooks/useIsClient'

import '../styles/globals.css'

export default function App({ Component, pageProps, router, }: AppProps) {
  const isClient = useIsClient()

  const url = `https://diegorlb.com.ar/${router.route}`

  return (
    <>
      <Head>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />
        <meta name={'canonical'} content={url} />
      </Head>
      <LazyMotion features={domAnimation} strict={true}>
        {isClient ? (
          <AnimatePresence exitBeforeEnter={true} initial={false}>
            <Component key={url} {...pageProps} />
          </AnimatePresence>
        ) : (<Component key={url} {...pageProps} />)}
      </LazyMotion>
    </>
  )
}