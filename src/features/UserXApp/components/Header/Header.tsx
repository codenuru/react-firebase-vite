import { navItems, useToggle } from '@/features/UserXApp/'

import { Container } from './Container'
import './Header.css'
import { LeftMenuItems } from './LeftMenuItems'

export const Header = () => {
  const [isNavClicked, setIsNavClicked] = useToggle()
  return (
    <>
      <header>
        <Container>
          <nav id="navigation">
            <div className="logo">UserX</div>
            <div
              className={`nav-toggle ${isNavClicked && 'open'}`}
              onClick={setIsNavClicked}
              onKeyPress={setIsNavClicked}
              role="button"
              tabIndex={0}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <LeftMenuItems
              navItems={navItems}
              isMobile={isNavClicked}
              linkAction={setIsNavClicked}
            />
          </nav>
        </Container>
      </header>
    </>
  )
}
