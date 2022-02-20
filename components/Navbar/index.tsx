import { FunctionComponent, useState, } from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, } from 'react-icons/ai'

const links: Array<{ title: string, path: string, }> = [
  { title: 'home', path: '/', },
  { title: 'projects', path: '/projects', },
  { title: 'skills', path: '/skills' },
  { title: 'about', path: '/about', },
]

const Navbar: FunctionComponent = ({ }) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <nav className={'bg-secondary relative'}>
      <div className={'w-full h-14 sm:h-12 flex items-center px-6'}>
        <p className={'text-slate-50 font-hack font-semibold tracking-wide uppercase'}>
          Diego Rodríguez
        </p>
        <div className={'hidden sm:flex ml-auto space-x-4'}>
          {links.map(({ title, path, }, index) => (
            <div key={index}>
              <Link href={path} passHref={true}>
                <a className={'text-slate-50 font-hack font-medium '}>{title}</a>
              </Link>
            </div>
          ))}
        </div>
        <div className={'h-2/3 aspect-square bg-white flex sm:hidden ml-auto rounded-md items-center justify-center'} onClick={() => setShow(prev => !prev)}>
          {show ? <AiOutlineClose className={'w-6 h-6 aspect-square fill-secondary'} /> : <AiOutlineMenu className={'w-6 h-6 aspect-square fill-secondary'} />}
        </div>
      </div>

      {show && (
        <div className={'w-screen h-screen sm:hidden absolute backdrop-blur-sm z-10'}>
          <div className={'w-full bg-secondary p-6 space-y-4 flex flex-col items-end'}>
            {links.map(({ title, path, }, index) => (
              <div key={index} className={'w-20'}>
                <Link href={path} passHref={true}>
                  <a className={'text-slate-50 font-hack font-medium'}>{title}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar