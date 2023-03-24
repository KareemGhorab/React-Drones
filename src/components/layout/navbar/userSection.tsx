import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function UserSection() {
  return (
    <section className='flex items-center justify-center gap-9 bg-primary-700 py-3'>
      <FontAwesomeIcon icon={faUser} size='xl' />
      <FontAwesomeIcon icon={faShoppingCart} size='xl' />
    </section>
  )
}
