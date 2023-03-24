import Search from './search'
import UserSection from './userSection'

export default function Sidenav({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={() => onClose()}
      className='fixed top-0 right-0 left-0 bottom-0 z-30 bg-black bg-opacity-75'
    >
      <nav
        onClick={(e) => e.stopPropagation()}
        className='h-screen w-72 bg-white px-5 py-10'
      >
        <Search />
        <div className='my-16'></div>
        <UserSection />
      </nav>
    </div>
  )
}
