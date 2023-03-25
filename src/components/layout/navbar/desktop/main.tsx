import Container from '~/container'
import Logo from '../logo'
import Search from '../search'

export default function Main() {
  return (
    <Container className='bg-primary-500'>
      <div className='flex justify-between py-9'>
        <Logo large={true} />
        <div>
          <Search pillShaped={true} />
        </div>
      </div>
    </Container>
  )
}
