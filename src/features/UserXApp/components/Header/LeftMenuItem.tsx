import { CustomLink } from '@/components/CustomLink'
import { type NavItem } from '@/features/UserXApp/'

type LeftMenuItemProps = {
  navItem: NavItem
  linkAction: () => void
}
export const LeftMenuItem = (props: LeftMenuItemProps) => {
  const { navItem, linkAction } = props
  return (
    <div>
      <li>
        <CustomLink to={navItem.to} onClick={linkAction}>
          {navItem.label}
        </CustomLink>
      </li>
    </div>
  )
}
