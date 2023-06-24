import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.css";
import { Navigation } from "swiper";
import { Fade } from 'react-reveal';




const Carousel = () => {
  return (
    <>
    <Fade big cascad >

    <Swiper autoplay={true} navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img className='' src={require('../assests/carousel/pic1.png')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../assests/carousel/dailyuse.png')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../assests/carousel/fashion.png')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../assests/carousel/homedecor.png')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../assests/carousel/kitchenitemsbanner_1.png')} alt="" />
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src={require('../assests/carousel/offers.png')} alt="" />
      </SwiperSlide> */}
      <SwiperSlide>
        <img src={require('../assests/carousel/stationery.png')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../assests/carousel/toys.png')} alt="" />
      </SwiperSlide>
      
    </Swiper>
    </Fade>
  </>
  )
}

export default Carousel