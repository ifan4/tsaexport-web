import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProductsData from '../data/products.json'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./mainCarousel.css";

import SecondCarousel from "./secondCarousel";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper";

const MainSwiper = ()=>{
    
    return(
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
            {
                ProductsData.map((item,key)=>
                    <SwiperSlide key={key}>
                
                        <div className="md:flex items-center w-full md:h-3/4">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <SecondCarousel imageSource={item.imageFile}/>
                            </div>
                            <div className="md:w-1/2 h-3/4 bg-orange-900/75 text-left py-3 px-7 md:py-12 md:px-12">
                                <h4 className="text-yellow-200 font-bold text-4xl mb-2">Products</h4>
                                <table className="table-fixed text-white mb-4 font-bold">
                                    <tbody>
                                        <tr>
                                            <td>Category</td>
                                            <td>: {item.category}</td>
                                        </tr>
                                        <tr className="align-top">
                                            <td>Variety</td>
                                            <td className="flex">
                                                <span>:&nbsp;</span>
                                                <ul className="list-disc md:list-none">
                                                    {
                                                        item.variety.map((item,key)=><li key={key}>{item}</li>)
                                                    }
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h5 className="text-yellow-200 font-bold text-2xl mb-2">{item.name}</h5>
                                <p className="text-white" dangerouslySetInnerHTML={{__html:item.description }}/>
                            </div>
                        </div>

                    </SwiperSlide>
                    )
            }
        </Swiper>
    )
}

export default function Products() {

    
    return(
        <div>
            <div 
            class="bg-cover bg-center h-screen my-12" 
            id="products"
            style={{
                backgroundImage: `url(/products/products-wallpaper.jpg)`,
            }}>
                <MainSwiper/>
            </div>
            
        </div>
    )
}