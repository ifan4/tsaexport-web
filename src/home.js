import Header from "./header";
import HeroBanner from "./heroBanner";
import Products from './products'
import ProductsData from './data/products.json'
import { createContext, useContext, useEffect, useState } from "react";
import Visionmision from "./visionmision";
import Carousel2 from './carousel2'
import CompanyProfile from './companyProfile'
import ContactUs from './contactUs'


export const OpenFeedbackModalContext = createContext()

export const useOpenFeedbackModalContext =()=>{
    return useContext(OpenFeedbackModalContext)
}

export default function(){
    const [isOpen,setIsOpen] = useState(false)


    return(
        <OpenFeedbackModalContext.Provider value={{ isOpen, setIsOpen }}>
            <Header/>
            <HeroBanner/>
            <Products/>
            <Visionmision/>
            <Carousel2/>
            <CompanyProfile/>
            <ContactUs/>
        </OpenFeedbackModalContext.Provider>
    )
}