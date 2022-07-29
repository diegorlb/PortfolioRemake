import { FunctionComponent, } from 'react'
import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { m } from 'framer-motion'

type LayoutWrapperProps = {
  title: string,
  og: {
    title: string,
    description: string,
  }
  children: JSX.Element | Array<JSX.Element>,
}

const LayoutWrapper: FunctionComponent<LayoutWrapperProps> = ({ title, og, children, }) => {
  return (
    <div className={'w-screen bg-primary h-screen flex flex-col overflow-hidden'}>
      <Head>
        <title key={'title'}>{`${title} | Diego Rodríguez`}</title>

        <meta property={'og:title'} content={og['title']} />
        <meta property={'og:type'} content={'website'} />
        <meta property={'og:url'} content={'https://diegorlb.com.ar/'} />
        <meta property={'og:image'} content={'https://diegorlb.com.ar/icons/favicon.ico'} />
        <meta property={'og:description'} content={og['description']} />
        <meta property={'og:site_name'} content={`${title} | Diego Rodríguez`} />
        <meta property={'og:locale'} content={'en_US'} />
      </Head>

      <Navbar />

      <m.main className={'bg-primary flex-1 flex justify-center items-center'}
        variants={{
          hidden: { opacity: 0, x: -200, },
          enter: { opacity: 1, x: 0, },
          exit: { opacity: 0, x: 200, },
        }}
        initial={'hidden'}
        animate={'enter'}
        exit={'exit'}
        transition={{ easings: 'linear', }}>
        {children}
      </m.main>

      <Footer />
    </div>
  )
}

export default LayoutWrapper