import Logo from '../logo'
import Search from '../search'
import Contact from './contact'
import Main from './main'

export default function Navbar() {
  return (
    <nav className='text-white'>
      <Contact />
      <Main />
    </nav>
  )
}
