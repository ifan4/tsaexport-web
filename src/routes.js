import * as react from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./home";
// import SecondCarousel from './products/secondCarousel'


function rute(){

    react.useEffect(()=>{
        console.log("Test title doc");
        document.title = "TSA Export"
    },[])

    return(
        <div>
            {/* <Link to="/" className="border-b-4 border-indigo-500 hover:bg-sky-700 hover:text-white px-4">Home Page</Link>
            <Link to="/about">About Us</Link> */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/test" element={<SecondCarousel/>}/> */}
            </Routes>
        </div>
        
    )
}

export default rute;