import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Thumbs,FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./secondCarousel.css";



export default function SecondCarousel({imageSource}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  


  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "rgba(139, 69, 19, 0)",
          "--swiper-pagination-color": "rgba(139, 69, 19, 0)",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mysecond-Swiper2 md:rounded-r-2xl"
      >
        
        <SwiperSlide>
            <img src={`/products/${imageSource}/1.jpg`}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={`/products/${imageSource}/2.jpg`}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={`/products/${imageSource}/3.jpg`}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={`/products/${imageSource}/4.jpg`}/>
        </SwiperSlide>
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mysecond-Swiper"
      >

        <SwiperSlide>
            <img src={`/products/${imageSource}/1.jpg`}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={`/products/${imageSource}/2.jpg`}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={`/products/${imageSource}/3.jpg`}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={`/products/${imageSource}/4.jpg`}/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
