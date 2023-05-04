import { type NavItem } from '@/features/UserXApp/'

import { LeftMenuItem } from './LeftMenuItem'
import './LeftMenuItems.css'

type LeftMenuItemsProps = {
  navItems: NavItem[]
  isMobile: boolean
  linkAction: () => void
}
export const LeftMenuItems = (props: LeftMenuItemsProps) => {
  const { navItems, isMobile, linkAction } = props
  return (
    <ul className={`menu-left ${isMobile && 'collapse'}`}>
      {navItems?.map((navItem) => (
        <li key={navItem.label}>
          <LeftMenuItem navItem={navItem} linkAction={linkAction} />
        </li>
      ))}
    </ul>
  )
}
