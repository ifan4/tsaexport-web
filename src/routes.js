import * as react from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./home";


const About = ()=><h1>About Us</h1>

function rute(){
    return(
        <div>
            {/* <Link to="/" className="border-b-4 border-indigo-500 hover:bg-sky-700 hover:text-white px-4">Home Page</Link>
            <Link to="/about">About Us</Link> */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
        
    )
}

export default rute;