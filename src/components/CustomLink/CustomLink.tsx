import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { type LinkProps } from 'react-router-dom'

export const CustomLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link to={to} {...props} style={{ opacity: match ? 0.6 : 1 }}>
      {children}
    </Link>
  )
}
