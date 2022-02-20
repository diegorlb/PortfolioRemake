import { FunctionComponent, } from 'react'
import Link from 'next/link'
import * as SiIcons from 'react-icons/si'
import LayoutWrapper from '../components/LayoutWrapper'
import Typewritter from '../components/Typewritter'

const Index: FunctionComponent = () => {
  const icons: Array<{ label: string, title: string, icon: keyof typeof SiIcons, link: string }> = [
    { label: 'LinkedIn page link', title: 'LinkedIn', icon: 'SiLinkedin', link: '', },
    { label: 'Github page link', title: 'Github', icon: 'SiGithub', link: '', },
    { label: 'Resumee link', title: 'Resumee', icon: 'SiAdobe', link: '', },
  ]

  return (
    <LayoutWrapper title={'Home'}>
      <div className={'sm:w-5/6 xl:w-4/6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 px-3'}>
        <div className={'h-40 w-full sm:h-64 sm:w-auto sm:aspect-square bg-slate-100 rounded-md'}></div>

        <p className={'sm:h-64 text-slate-50 font-hack font-normal sm:text-justify text-xl sm:text-base md:text-xl m-0 pl-2 relative sm:before:hidden before:border-l-2 before:absolute before:h-full before:left-0'}>
          <span className={'text-2xl font-bold'}>
            <Typewritter words={['Hello!', 'How are you?']} />
          </span><br />
          My name is <strong>Diego Rodríguez</strong>,
          I&apos;m a twenty years old, <em>Junior JavaScript &amp; TypeScript Developer</em>, based in Buenos Aires, Argentina.
          I enjoy coding whatever idea crosses my mind, from <u>silly games</u> to actually <u>useful projects</u>.
          I plan on keep expanding my knowledge and understanding about programming.
        </p>

        <div className={'sm:h-64 flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-3 sm:justify-center sm:ml-3'}>
          {icons.map(({ label, title, icon, link, }, index) => {
            const Icon = SiIcons[icon]
            return (
              <div key={index}>
                <Link href={link} passHref={true}>
                  <a aria-label={label} title={title}>
                    <Icon className={'h-8 w-8 fill-slate-50 transition-transform hover:-translate-y-1'} />
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default Index