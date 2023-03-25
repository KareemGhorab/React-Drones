import Container from '~/container'

export default function Contact() {
  return (
    <Container className='bg-primary-700 py-3'>
      <div className='flex justify-between'>
        <a href='mailto:kareemghorab3@gmail.com'>
          Email: kareemghorab3@gmail.com
        </a>
        <a href='tel:201128887241'>Tel: +20 112 888 7241</a>
      </div>
    </Container>
  )
}
