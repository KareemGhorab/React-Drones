import Container from '~/container'
import Logo from '../logo'
import Search from '../search'
import UserSection from './user-section'

export default function Main() {
  return (
    <Container className='bg-primary-500'>
      <div className='flex justify-between py-7'>
        <Logo large={true} />
        <div className='flex flex-grow justify-end gap-20'>
          <div className='w-[42rem]'>
            <Search pillShaped={true} larger={true} />
          </div>
          <UserSection />
        </div>
      </div>
    </Container>
  )
}
