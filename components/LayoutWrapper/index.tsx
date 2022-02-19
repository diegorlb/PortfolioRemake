import { FunctionComponent, } from 'react'
import Navbar from '../Navbar'

const LayoutWrapper: FunctionComponent = ({ children, }) => {
  return (
    <div className={'w-screen h-screen flex flex-col overflow-hidden'}>
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