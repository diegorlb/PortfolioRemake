import { FunctionComponent, } from 'react'
import Head from 'next/head'
import Navbar from '../Navbar'

type LayoutWrapperProps = {
  title: string,
}

const LayoutWrapper: FunctionComponent<LayoutWrapperProps> = ({ title, children, }) => {
  return (
    <div className={'w-screen h-screen flex flex-col overflow-hidden'}>
      <Head>
        <title key={'title'}>{title} | Diego Rodríguez</title>
      </Head>

      <Navbar />

      <main className={'bg-primary flex-1 flex justify-center items-center'}>
        {children}
      </main>

      <footer className={'bg-secondary'}>
        <div className={'w-full h-10 flex flex-col justify-center items-center'}>
          {['Made with lots of <3', '© 2022'].map((text, index) => (
            <p key={index} className={'text-slate-50/75 font-sans text-xs'}>
              {text}
            </p>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default LayoutWrapper