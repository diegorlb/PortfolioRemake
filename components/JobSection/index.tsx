import { FunctionComponent, } from 'react'
import { m, } from 'framer-motion'

type JobSectionProps = {
  index: number,
  title: string,
  company: string,
  from: string,
  to: string,
  info: string,
}

const JobSection: FunctionComponent<JobSectionProps> = ({ index, title, company, from, to, info, }) => {
  return (
    <m.div
      className={'w-full flex flex-grow overflow-hidden'}
      custom={index}
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
      <div className={'w-[0.75rem] h-full mr-[0.5rem] border-r-2 border-r-slate-100 relative before:content-[""] before:absolute before:w-[0.5rem] before:h-[0.5rem] before:rounded-full before:left-full before:right-0 before:-translate-x-[calc(50%-0.75px)] before:top-[1.15rem] before:bg-slate-100'} />
      <div className={'w-full h-full flex flex-col mr-[0.5rem] py-3'}>
        <span className={'font-hack font-bold text-sm text-slate-100'}>{title}</span>
        <span className={'font-hack font-semibold text-xs text-slate-200'}>{company}</span>
        <span className={'font-hack font-light text-xxs text-slate-200 my-1'}>{from} - {to}</span>
        <p className={'font-hack text-xs text-slate-100'}>{info}</p>
      </div>
    </m.div>
  )
}

export default JobSection