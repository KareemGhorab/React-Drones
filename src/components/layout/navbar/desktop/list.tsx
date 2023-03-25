import Link from 'next/link'
import Container from '~/container'

export default function List() {
  return (
    <Container className='bg-primary-700'>
      <ul className='flex gap-16 py-5 font-bold uppercase'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/'>Store</Link>
        </li>
        <li>
          <Link href='/'>About Us</Link>
        </li>
        <li>
          <Link href='/'>Blog</Link>
        </li>
        <li>
          <Link href='/'>Contact Us</Link>
        </li>
      </ul>
    </Container>
  )
}
