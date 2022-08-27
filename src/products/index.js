import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./mainCarousel.css";

import SecondCarousel from "./secondCarousel";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper";

export default function products() {
    
    return(
        <div>
            <div class="bg-cover bg-center h-screen my-12" 
            style={{
                backgroundImage: `url(/products/products-wallpaper.jpg)`,
            }}>
            <Swiper
            cssMode={true}
            navigation={true}
            // autoplay={{
            //     delay: 5000,
            //     disableOnInteraction: false,
            //   }}
            pagination={{
                clickable: true,
              }}
            mousewheel={true}
            keyboard={true}
            modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
            >
                <SwiperSlide>
                    
                        <div className="md:flex items-center w-full md:h-3/4">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <SecondCarousel/>
                            </div>
                            <div className="md:w-1/2 h-3/4 bg-orange-900/75 text-left py-3 px-7 md:py-12 md:px-12">
                                <h4 className="text-yellow-200 font-bold text-4xl mb-2">Products</h4>
                                <table className="table-fixed text-white mb-4 font-bold">
                                    <tbody>
                                        <tr>
                                            <td>Category</td>
                                            <td>: Black Pepper</td>
                                        </tr>
                                        <tr className="align-top">
                                            <td>Variety</td>
                                            <td className="flex">
                                                <span>:&nbsp;</span>
                                                <ul className="list-disc md:list-none">
                                                    <li>Black Pepper</li>
                                                    <li>White Pepper</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h5 className="text-yellow-200 font-bold text-2xl mb-2">Black Pepper</h5>
                                <p className="text-white ">
                                    Black pepper or (Pipper Nigrum) is a flowering vine in the family Pipperceae, which is usually known as peppercorn, which is dried and used as spice or seasoning. One of the most distinctive varieties of black pepper came from Indonesia. Is known all over the world because of its burning pungency, taste, and aroma.
                                </p>


                                    
                            </div>
                            {/* <SecondCarousel/> */}
                        </div>

                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            </div>
            
        </div>
    )
}