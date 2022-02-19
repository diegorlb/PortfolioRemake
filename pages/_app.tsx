import { AppProps, } from 'next/app'
import Script from 'next/script'

import '../styles/globals.css'

export default function StyledApp({ Component, pageProps, }: AppProps) {
  return (
    <>
      <link rel={'stylesheet'} href={'//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css'}></link>
      <Script strategy={'lazyOnload'} src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id={'google-analytics'} strategy={'afterInteractive'}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}