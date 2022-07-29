import { FunctionComponent, } from 'react'
import dynamic from 'next/dynamic'

import * as SiIcons from 'react-icons/si'
import { m, } from 'framer-motion'

const LayoutWrapper = dynamic(() => import('../components/LayoutWrapper'))
const HoverIcon = dynamic(() => import('../components/HoverIcon'))

const Skills: FunctionComponent = ({ }) => {
  const sections: Array<{
    title: string,
    icons: Array<{ icon: keyof typeof SiIcons, name: string, color: string, }>,
  }> = [{
    title: 'Skills I have learnt',
    icons: [
      { icon: 'SiHtml5', name: 'HTML 5', color: '#E34F26', },
      { icon: 'SiCss3', name: 'CSS 3', color: '#1572B6', },
      { icon: 'SiTypescript', name: 'TypeScript', color: '#3178C6', },
      { icon: 'SiJavascript', name: 'JavaScript', color: '#F7DF1E', },
      { icon: 'SiNodedotjs', name: 'Node JS', color: '#339933', }, ,
      { icon: 'SiTsnode', name: 'TS Node', color: '#3178C6', },
      { icon: 'SiReact', name: 'React JS', color: '#61DAFB', },
      { icon: 'SiNextdotjs', name: 'Next JS', color: '#000000', },
      { icon: 'SiFastify', name: 'Fastify', color: '#000000', },
      { icon: 'SiStyledcomponents', name: 'Styled Components', color: '#DB7093', },
      { icon: 'SiRedux', name: 'Redux', color: '#764ABC', },
      { icon: 'SiMongodb', name: 'MongoDB', color: '#47A248', },
      { icon: 'SiExpress', name: 'Express JS', color: '#000000', },
      { icon: 'SiGithub', name: 'Github', color: '#181717', },
      { icon: 'SiSocketdotio', name: 'Socket.io', color: '#010101', },
      { icon: 'SiVercel', name: 'Vercel', color: '#000000', },
    ],
  }, {
    title: 'Skills I\'m currently learning',
    icons: [
      { icon: 'SiPython', name: 'Python', color: '#3776AB', },
      { icon: 'SiExpo', name: 'Expo', color: '#000020', },
      { icon: 'SiFirebase', name: 'Firebase', color: '#FFCA28', },
      { icon: 'SiAmazons3', name: 'Amazon S3', color: '#569A31', },
      { icon: 'SiAmazonaws', name: 'Amazon AWS', color: '#232F3E', },
      { icon: 'SiTailwindcss', name: 'Tailwind CSS', color: '#06B6D4', },
    ],
  }, {
    title: 'Skills I plan on learning',
    icons: [
      { icon: 'SiSass', name: 'SASS', color: '#CC6699', },
      { icon: 'SiDocker', name: 'Docker', color: '#2496ED', },
      { icon: 'SiGooglecloud', name: 'Google Cloud', color: '#4285F4', },
      { icon: 'SiFlutter', name: 'Flutter', color: '#02569B', },
      { icon: 'SiWebassembly', name: 'Web Assembly', color: '#654FF0', },
    ],
  }]

  return (
    <LayoutWrapper title={'Skills'}>
      <div className={'w-full h-[32rem] sm:w-1/2 flex flex-col justify-center space-y-4'}>
        {sections.map(({ title, icons, }, sectionIndex) => (
          <m.div
            key={sectionIndex}
            className={'w-full h-32'}
            custom={sectionIndex}
            initial={'hidden'}
            animate={'visible'}
            variants={{
              visible: (i: number) => ({
                opacity: 1,
                x: 0,
                transition: { delay: (i + 1) * 0.15, },
              }),
              hidden: { opacity: 0, x: 25, },
            }}>
            <p className={'text-slate-100 text-lg font-hack font-bold'}>{title}</p>
            <div className={'flex flex-wrap'}>
              {icons.map(({ icon, name, color, }, badgeIndex) => (
                <HoverIcon
                  key={badgeIndex}
                  icon={icon}
                  accent={color}
                  title={name}
                  className={'mr-3 last:mr-0 mb-2 hover:bg-slate-800 rounded-md block'}
                  custom={[sectionIndex, badgeIndex]}
                  initial={'hidden'}
                  animate={'visible'}
                  variants={{
                    visible: ([c, b]: number[]) => ({
                      opacity: 1,
                      x: 0,
                      transition: { delay: (b + 1) * 0.05 + (c + 1) * 0.15, },
                    }),
                    hidden: { opacity: 0, x: 5, },
                  }} />
              ))}
            </div>
          </m.div>
        ))}
      </div>
    </LayoutWrapper>
  );
}

export default Skills