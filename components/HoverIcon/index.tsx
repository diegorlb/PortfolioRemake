import { FunctionComponent, useMemo, useState, } from 'react'
import { HTMLMotionProps, m } from 'framer-motion'
import * as SiIcons from 'react-icons/si'

type HoverIconProps = {
  icon: keyof typeof SiIcons,
  accent: string,
  title: string,
} & HTMLMotionProps<'div'>

const HoverIcon: FunctionComponent<HoverIconProps> = ({ icon, accent, title, ...rest }) => {
  const [hover, setHover] = useState<boolean>(false)

  const Icon = useMemo(() => SiIcons[icon], [icon])

  return (
    <m.div
      {...rest}
      title={title}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Icon
        className={'w-8 h-8 m-1 text-slate-100 transition-colors'}
        title={title}
        style={{ ...(hover ? { color: accent, } : {}), }} />
    </m.div>
  )
}

export default HoverIcon