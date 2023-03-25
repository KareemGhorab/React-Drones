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
          <Link href='/store'>Store</Link>
        </li>
        <li>
          <Link href='/about'>About Us</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
        <li>
          <Link href='/contact'>Contact Us</Link>
        </li>
      </ul>
    </Container>
  )
}
