import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import useToggle from '~/hooks/useToggle'

import Logo from './logo'
import Sidenav from './sidenav'

export default function Navbar() {
  const [showNav, toggleNav] = useToggle()

  return (
    <nav className='bg-primary-500 p-5 text-white'>
      <div className='flex justify-between'>
        <Logo />
        <button onClick={() => toggleNav()}>
          <FontAwesomeIcon icon={faBars} size='xl' />
        </button>
      </div>
      {showNav && <Sidenav onClose={toggleNav} />}
    </nav>
  )
}
