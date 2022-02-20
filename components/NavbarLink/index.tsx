import { FunctionComponent, } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

type NavbarLinkProps = {
  title: string,
  path: string,
}

const NavbarLink: FunctionComponent<NavbarLinkProps> = ({ title, path, }) => {
  const router = useRouter()

  return (
    <Link href={path} passHref={true}>
      {(path === router.asPath) ? (
        <a className={'text-slate-300 font-hack font-medium before:content-["/"]'}>{title}</a>
      ) : (
        <a className={'text-slate-100 font-hack font-medium'}>{title}</a>
      )}
    </Link>
  );
}

export default NavbarLink