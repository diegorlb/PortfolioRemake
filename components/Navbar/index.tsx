import dynamic from 'next/dynamic'
import { FunctionComponent, useState, } from 'react'
import { AiOutlineClose, AiOutlineMenu, } from 'react-icons/ai'

const NavbarLink = dynamic(() => import('../NavbarLink'))

const links: Array<{ title: string, path: string, }> = [
  { title: 'home', path: '/', },
  { title: 'projects', path: '/projects', },
  { title: 'skills', path: '/skills' },
  { title: 'about', path: '/about', },
]

const Navbar: FunctionComponent = ({ }) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <nav className={'bg-secondary relative z-20'}>
      <div className={'w-full h-12 flex items-center px-6'}>
        <p className={'hidden sm:flex text-slate-100 font-hack font-semibold tracking-wide'}>
          Diego Rodríguez
        </p>
        <p className={'flex sm:hidden text-slate-100 font-hack text-lg font-semibold tracking-wider uppercase'}>
          DR
        </p>
        <div className={'hidden sm:flex ml-auto space-x-4'}>
          {links.map((props, index) => (
            <div key={index}>
              <NavbarLink {...props} />
            </div>
          ))}
        </div>
        <div className={'h-2/3 aspect-square bg-slate-100 flex sm:hidden ml-auto rounded-md items-center justify-center'} onClick={() => setShow(prev => !prev)}>
          {show ? (
            <AiOutlineClose className={'w-6 h-6 aspect-square fill-secondary'} />
          ) : (
            <AiOutlineMenu className={'w-6 h-6 aspect-square fill-secondary'} />
          )}
        </div>
      </div>

      {show && (
        <div className={'w-screen h-screen sm:hidden absolute backdrop-blur-sm z-30'}>
          <div className={'w-full bg-secondary p-6 space-y-4 flex flex-col items-end'}>
            {links.map((props, index) => (
              <div key={index} className={'w-20'}>
                <NavbarLink {...props} />
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar