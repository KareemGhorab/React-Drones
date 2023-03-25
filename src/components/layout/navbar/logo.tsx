import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import cn from 'classnames'

interface Props {
  large?: boolean
}

export default function Logo({ large = false }: Props) {
  return (
    <Link
      className={`flex items-center ${cn({
        'gap-2': large,
        'gap-1': !large,
      })}`}
      href='/'
    >
      <FontAwesomeIcon icon={faBolt} size={large ? '2xl' : 'lg'} />
      <h1
        className={`font-semibold ${cn({
          'text-4xl': large,
          'text-2xl': !large,
        })}`}
      >
        Drones
      </h1>
    </Link>
  )
}
