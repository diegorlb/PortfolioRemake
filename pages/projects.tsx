import { FunctionComponent, useCallback, } from 'react'
import { GetStaticProps, } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import * as SiIcons from 'react-icons/si'
import { m, } from 'framer-motion'

import getGithubData, { RepositoryType, } from '../utils/GithubUtils'

const LayoutWrapper = dynamic(() => import('../components/LayoutWrapper'))

type ProjectsProps = {
  projects: Array<RepositoryType>,
}

const Projects: FunctionComponent<ProjectsProps> = ({ projects, }) => {

  const hashColor = useCallback((name: string) => {
    let hashed = 0
    for (let i = 0; i < name.length; i++) {
      const char = name.charCodeAt(i)
      hashed = ((hashed << 6) - hashed) + char
      hashed &= hashed
    }
    return `#${Math.abs(hashed).toString(16).slice(0, 6)}`
  }, [])

  const techIcon = useCallback((tech: string) => {
    const icons: Record<string, keyof typeof SiIcons> = {
      'typescript': 'SiTypescript',
      'javascript': 'SiJavascript',
      'reactjs': 'SiReact',
      'nextjs': 'SiNextdotjs',
      'styled-components': 'SiStyledcomponents',
      'node': 'SiNodedotjs',
      'html': 'SiHtml5',
      'css': 'SiCss3',
      'redux': 'SiRedux',
      'express': 'SiExpress',
      'webpack': 'SiWebpack',
      'tailwind': 'SiTailwindcss',
      'framer-motion': 'SiFramer',
      'font-awesome': 'SiFontawesome',
    }

    return SiIcons[icons[tech]]
  }, [])

  return (
    <LayoutWrapper title={'Projects'}>
      <div className={'w-full h-[38rem] sm:w-4/6 overflow-y-auto overflow-x-hidden flex flex-wrap px-2 sm:pl-0 scrollbar-thin scrollbar-thumb-slate-100 scrollbar-track-transparent scroll-smooth'}>
        {projects.map(({ name, description, languages, links, }, index) => (
          <m.div
            className={'w-full h-[calc(100%/3-2*0.5rem)] sm:w-[calc(100%*1/2-2*0.5rem)] lg:w-[calc(100%*1/3-2*0.5rem)] sm:mx-2 my-2 p-2 bg-secondary overflow-hidden rounded-md flex flex-col group relative border border-secondary hover:border-slate-400'}
            key={index}
            custom={index}
            initial={'hidden'}
            animate={'visible'}
            variants={{
              visible: (i: number) => ({
                opacity: 1,
                x: 0,
                transition: {
                  delay: (i + 1) * 0.1,
                },
              }),
              hidden: {
                opacity: 0,
                x: 25,
              },
            }}>

            <div className={'h-[calc(100%*1/3-0.5rem)] w-full flex'}>
              <div className={`h-full aspect-square rounded-lg`} style={{ backgroundColor: hashColor(name), }} />
              <p className={'h-full text-slate-100 grow font-hack font-bold text-lg pl-2 tracking-wide'}>{name}</p>
            </div>

            <div className={'flex-1 w-full my-2 overflow-hidden'}>
              <p className={'h-full w-full text-slate-100 font-hack text-xs sm:text-xxs md:text-xs'}>{description}</p>
            </div>

            <div className={'h-8 w-full'}>
              <div className={'h-full text-slate-50 flex flex-row items-center space-x-2 font-hack text-xs'}>
                {(Array.isArray(languages) && languages.length > 0) ? languages.map((language, index) => {
                  const Icon = techIcon(language)
                  return (<Icon key={index} className={'h-6 w-6 aspect-square'} />)
                }) : 'Unspecified techs :('}
              </div>
            </div>

            <div className={'absolute top-full left-0 right-0 bottom-0 bg-secondary flex flex-col justify-center items-center overflow-hidden space-y-4 transition-all duration-200 ease-in-out group-hover:top-0'}>
              <div className={'w-full flex justify-center'}>
                <p className={'h-full text-slate-100 text-lg sm:text-sm md:text-lg font-hack'}>Where are we going?</p>
              </div>
              <div className={'w-full flex justify-center space-x-3'}>
                {links?.map(({ name, url, }, index) => (
                  <Link key={index} href={url} passHref={true}>
                    <a className={'w-2/5 h-10 bg-slate-600 text-slate-100 font-hack text-sm sm:text-xs flex justify-center items-center p-2 rounded-sm transition-all hover:shadow-md hover:shadow-slate-600 hover:-translate-y-0.5 active:-translate-y-[0.0625rem]'}>{name}</a>
                  </Link>
                ))}
              </div>
            </div>

          </m.div>
        ))}
      </div>
    </LayoutWrapper>
  );
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  return {
    props: {
      projects: await getGithubData(),
    },
    revalidate: 60,
  }
}

export default Projects