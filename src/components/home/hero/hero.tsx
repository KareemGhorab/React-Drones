import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Container from '~/container'

export default function Hero() {
  return (
    <header>
      <Carousel className='text-white' swipeable={true}>
        <Container className='bg-gradient-to-b from-primary-300 to-primary-400'>
          <div className='relative'>
            <div className='grid min-h-[44.5rem] grid-cols-2'>
              <div className='flex flex-col justify-center gap-6'>
                <h2 className='max-w-xl text-7xl font-bold uppercase'>
                  Next Level of Drones
                </h2>
                <p className='text-5xl uppercase'>Insane Quality for Use</p>
                <div className='my-2'></div>
                <Link href='/store' className='hero__button'>
                  Buy Now
                </Link>
              </div>
            </div>
            <div className='absolute right-0 z-10 h-full w-1/2 bg-primary-500'></div>
            <figure className='absolute right-0 z-20 flex items-center justify-center'>
              <Image
                src='/hero1.png'
                width={1046}
                height={480}
                alt='White Drone'
              />
            </figure>
          </div>
        </Container>
        <Container>
          <div></div>
        </Container>
      </Carousel>
    </header>
  )
}
