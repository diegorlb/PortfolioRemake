import dynamic from 'next/dynamic'
import { FunctionComponent, } from 'react'
import LayoutWrapper from '../components/LayoutWrapper'

const JobSection = dynamic(() => import('../components/JobSection'))

const About: FunctionComponent = ({ }) => {
  const jobs = [
    {
      title: 'Software Engineer',
      company: 'GlobalLogic S.R.L.',
      from: 'July 2022',
      to: 'Currently',
      info: 'Work as a JavaScript software engineer.',
    }, {
      title: 'Software Developer & E-Commerce support',
      company: 'Giovalma Bazar',
      from: 'October 2021',
      to: 'February 2022',
      info: 'Development and maintenance of software of stock & sales control. Built using ElectronJS, ReactJS, React Native and Expo. Creation, design and maintenance of an E-Commerce webpage. Built using TiendaNube.',
    }, {
      title: 'Fullstack Javascript Developer',
      company: 'More Wine',
      from: 'May 2020',
      to: 'December 2020',
      info: 'Development and maintenance of an e-commerce webpage for the sale of wine-related products. Built using NextJS, ReactJS, TypeScript.',
    }, {
      title: 'Fullstack Javascript Developer',
      company: 'Jase\'s Media Center',
      from: 'December 2019',
      to: 'December 2020',
      info: 'Development and maintenance of an on-demand streaming site and management of movies, series and shows. Alongside its dedicated server for authentication, streaming and management of files. Built using ReactJS, ExpressJS, SocketIO, BCrypt, MongoDB.',
    },
  ]

  return (
    <LayoutWrapper
      title={'About'}
      og={{
        title: 'About',
        description: 'About me and my work.',
      }}>
      <div className={'w-full sm:w-1/2 h-[32rem] flex flex-col'}>
        {jobs.map((data, index) => (<JobSection key={index} index={index} {...data} />))}
      </div>
    </LayoutWrapper>
  )
}

export default About