import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import HeroSlide from './hero-slide'

export default function Hero() {
  return (
    <header>
      <Carousel className='text-white' swipeable={true}>
        <HeroSlide
          title='Next Level of Drones'
          subTitle='Insane Quality for Use'
          img='/hero1.png'
        />
        <HeroSlide
          title='Best Camera Included'
          subTitle='100% Flexible'
          img='/hero2.png'
        />
        <HeroSlide
          title='With Some Gifts'
          subTitle='Special One For You'
          img='/hero3.png'
        />
      </Carousel>
    </header>
  )
}
