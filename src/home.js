import Header from "./header";
import HeroBanner from "./heroBanner";
import Products from './products'
import ProductsData from './data/products.json'
import { useEffect } from "react";
import Visionmision from "./visionmision";
import Carousel2 from './carousel2'
import CompanyProfile from './companyProfile'
import ContactUs from './contactUs'

export default function(){
    useEffect(()=>{
        
        console.log(ProductsData);
    },[])

    return(
        <div>
            <Header/>
            <HeroBanner/>
            <Products/>
            <Visionmision/>
            <Carousel2/>
            <CompanyProfile/>
            <ContactUs/>
        </div>
    )
}