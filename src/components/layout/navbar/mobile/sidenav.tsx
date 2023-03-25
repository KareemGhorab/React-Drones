import cn from 'classnames'

import Search from '../search'
import UserSection from './userSection'

export default function Sidenav({
  onClose,
  isOpen,
}: {
  onClose: () => void
  isOpen: boolean
}) {
  return (
    <div
      onClick={() => onClose()}
      className={`fixed top-0 right-0 left-0 bottom-0 z-30 bg-black bg-opacity-75 transition-all duration-500 ease-out ${cn(
        {
          'visible bg-opacity-75': isOpen,
          'invisible bg-opacity-0': !isOpen,
        }
      )}`}
    >
      <nav
        onClick={(e) => e.stopPropagation()}
        className={`absolute h-screen w-72 bg-white px-5 py-10 transition-transform duration-500 ease-out ${cn(
          {
            'translate-x-0': isOpen,
            '-translate-x-72': !isOpen,
          }
        )}`}
      >
        <Search />
        <div className='my-16'></div>
        <UserSection />
      </nav>
    </div>
  )
}
