import Contact from './contact'
import List from './list'
import Main from './main'

export default function Navbar() {
  return (
    <nav className='text-white'>
      <Contact />
      <Main />
      <List />
    </nav>
  )
}
