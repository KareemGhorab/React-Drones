import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function UserSection() {
  return (
    <section className='flex justify-center items-center gap-10'>
      <FontAwesomeIcon icon={faUser} size='xl' />
      <FontAwesomeIcon icon={faShoppingCart} size='xl' />
    </section>
  )
}
