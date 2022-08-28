import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import { Link } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { useOpenFeedbackModalContext } from '../home'


export default function Header() {
    const [hide,setHide] = useState(true)
    const { isOpen, setIsOpen } = useOpenFeedbackModalContext()

    useEffect(()=>{
        let dimensiMonitor = window.innerWidth

        if (dimensiMonitor > 640){
            setHide(false)
        }
    })
    


    return(
        <>
            <nav className="container flex justify-between px-4 md:px-12 mx-auto">
                <p className="text-xs w-96 mt-2 hidden md:block">
                    Ruko South Goldfinch blok D-18, Summarecon, Jl. Springs Boulevard, Cihuni, Pagedangan, <span className="block">Tangerang Regency, Banten 15332</span>
                </p>
                <div className='flex justify-between space-x-12 text-xs md:text-base'>
                    <div className='flex items-center'>
                        <BsTelephoneFill className='mr-2'/>
                        +62 813 1822 8922
                    </div>
                    <button className='flex items-center bg-amber-400 p-3 md:px-3 transition hover:opacity-70 active:opacity-100 duration-300'
                    onClick={()=>setIsOpen(true)}
                    >
                        <MdEmail className='mr-2 text-stone-700'/>
                        Contact Us
                    </button>
                </div>
                <button className='md:hidden' onClick={()=>setHide(!hide)}>
                    <FaBars/>
                </button>
            </nav>

            <nav className={`transition container flex justify-end items-center text-center divide-x px-4 md:px-12 mt-2 mx-auto ${hide && 'hidden'} duration-300`}>

                <Link role={'button'} activeClass="active" to="products" spy={true} smooth={true} offset={50} duration={500} className='px-3 py-2 transition hover:text-amber-700 rounded-l-lg duration-200'>
                    Products
                </Link>

                <Link role={'button'} activeClass="active" to="visionmision" spy={true} smooth={true} offset={50} duration={500} className='px-3 py-2 transition hover:text-amber-700 duration-200'>
                    Vision and Mission
                </Link>

                <Link role={'button'} activeClass="active" to="aboutUs" spy={true} smooth={true} offset={50} duration={500} className='px-3 py-2 transition hover:text-amber-700 duration-200'>
                    About Us
                </Link>

                <Link role={'button'} activeClass="active" to="inquiries" spy={true} smooth={true} offset={50} duration={500} className='px-3 py-2 transition hover:text-amber-700 rounded-r-lg duration-200'>
                    Inquiries
                </Link>
            </nav>
        </>

    )
}