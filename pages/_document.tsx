import { Head, Html, Main, NextScript, } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet={'UTF-8'} />
        <meta name={'description'} content={'JavaScript & TypeScript enthusiastic, with a profound love for mathematics & physics.'} />
        <meta name={'keywords'} content={'portfolio, javascript, typescript, developer, react, reactjs, nextjs'} />
        <meta name={'author'} content={'Diego Rodríguez'} />
        <meta name={'copyright'} content={'Diego Rodríguez'} />
        <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />

        <link rel={'shortcut icon'} href={'/icons/favicon.ico'} type={'image/x-icon'} />

        <link rel={'preload'} href={'/fonts/hack-regular.woff'} as={'font'} crossOrigin={''} />
        <link rel={'preload'} href={'/fonts/hack-bold.woff'} as={'font'} crossOrigin={''} />
        <link rel={'preload'} href={'/fonts/hack-italic.woff'} as={'font'} crossOrigin={''} />

        <Script strategy={'lazyOnload'} src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <Script id={'google-analytics'} strategy={'afterInteractive'}>
          {`window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_ANALYTICS}');`}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}