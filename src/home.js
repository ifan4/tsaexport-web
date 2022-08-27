import Header from "./header";
import HeroBanner from "./heroBanner";
import Products from './products'
import ProductsData from './data/products.json'
import { useEffect } from "react";

export default function(){
    useEffect(()=>{
        
        console.log(ProductsData);
    },[])

    return(
        <div>
            <Header/>
            <HeroBanner/>
            <Products/>
        </div>
    )
}