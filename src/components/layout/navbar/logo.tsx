import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link className='flex items-center gap-1' href='/'>
      <FontAwesomeIcon icon={faBolt} size='lg' />
      <h1 className='text-2xl font-semibold'>Drones</h1>
    </Link>
  )
}
