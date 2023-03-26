import Image from 'next/image'
import Link from 'next/link'

import Container from '~/container'

interface Props {
  title: string
  subTitle: string
  img: string
}

export default function HeroSlide({ title, subTitle, img }: Props) {
  return (
    <div className='relative min-h-[52rem] overflow-hidden bg-gradient-to-b from-primary-300 to-primary-400'>
      <div className='absolute -right-32 z-10 h-full w-1/2 -skew-x-[15deg] bg-primary-500'></div>
      <Container className='absolute z-20 flex h-full w-full items-center justify-center'>
        <div className='grid h-full w-full grid-cols-2'>
          <div className='flex flex-col items-start justify-center gap-6'>
            <h2 className='max-w-xl text-left text-7xl font-bold uppercase'>
              {title}
            </h2>
            <p className='text-5xl uppercase'>{subTitle}</p>
            <div className='my-2'></div>
            <Link href='/store' className='hero__button'>
              Buy Now
            </Link>
          </div>
          <figure className='flex items-center justify-center'>
            <Image src={img} width={1046} height={480} alt='White Drone' />
          </figure>
        </div>
      </Container>
    </div>
  )
}
