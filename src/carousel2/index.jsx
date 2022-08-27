
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../products/mainCarousel.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Index() {
  return (
    <div className="container px-4 md:px-12 mx-auto">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="/carousel2/1.jpg" alt="" />
            <Descriptions 
            headline='Delivered with care and integrity'
            desc={'Strarting our bussiness since 2021-now and still going.'}
            />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/carousel2/2.jpg" alt=""/>
            <Descriptions 
            headline='Delivered with care and integrity'
            desc={'Strarting our bussiness since 2021-now and still going.'}
            />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/carousel2/3.jpg" alt=""/>
            <Descriptions 
            headline='Delivered with care and integrity'
            desc={'Strarting our bussiness since 2021-now and still going.'}
            />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


const Descriptions = ({headline,desc})=>{
    return(
        <div className="absolute w-full text-left p-16 md:p-0 md:ml-56 text-white">
            <h3 className="md:text-6xl font-bold md:mb-3">{headline}</h3>
            <p className="text-sm md:text-base md:w-1/4">{desc}</p>
        </div>
    )
}
