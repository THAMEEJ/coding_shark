import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/services.css'

const Services = () => {
  return (
    <div>
      <div className="services">
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={5000} transitionTime={1000}>
          <div>
            <img src="/images/atoms.webp" alt="" />
            <p className='legend'> it support</p>
          </div>
          <div>
            <img src="/images/services1.webp" alt="" />
            <p  className='legend' >shaik</p>
          </div>
          <div>
            <img src="/images/services.webp" alt="" />
            <p  className='legend'>social</p>
          </div>
          <div>
            <img src="/images/services1.webp" alt="" />
            <p  className='legend'>corporate</p>
          </div>
        </Carousel>

      </div>
    </div>
  )
}

export default Services
