import { FunctionComponent, } from 'react'
import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { m } from 'framer-motion'

type LayoutWrapperProps = {
  title: string,
  children: JSX.Element | Array<JSX.Element>,
}

const LayoutWrapper: FunctionComponent<LayoutWrapperProps> = ({ title, children, }) => {
  return (
    <div className={'w-screen bg-primary h-screen flex flex-col overflow-hidden'}>
      <Head>
        <title key={'title'}>{`${title} | Diego Rodríguez`}</title>
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