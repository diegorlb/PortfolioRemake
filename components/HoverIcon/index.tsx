import { FunctionComponent, useMemo, useState, } from 'react'
import { IconBaseProps, } from 'react-icons'
import * as SiIcons from 'react-icons/si'

type HoverIconProps = {
  icon: keyof typeof SiIcons,
  accent: string,
} & IconBaseProps

const HoverIcon: FunctionComponent<HoverIconProps> = ({ icon, accent, style, ...rest }) => {
  const [hover, setHover] = useState<boolean>(false)

  const Icon = useMemo(() => SiIcons[icon], [icon])

  return (
    <Icon
      {...rest}
      style={{
        ...style,
        ...(hover ? { color: accent, } : {})
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} />
  )
}

export default HoverIcon