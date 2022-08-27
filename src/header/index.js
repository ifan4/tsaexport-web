import * as react from 'react'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
export default function Header() {
    return(
        <>
            <nav className="container flex justify-between px-4 md:px-12 mx-auto">
                <p className="text-xs w-96 mt-2">
                    Ruko South Goldfinch blok D-18, Summarecon, Jl. Springs Boulevard, Cihuni, Pagedangan, <span className="block">Tangerang Regency, Banten 15332</span>
                </p>
                <div className='flex space-x-12'>
                    <div className='flex items-center'>
                        <BsTelephoneFill className='mr-2'/>
                        +62 813 1822 8922
                    </div>
                    <button className='flex items-center bg-amber-400 px-3 transition hover:opacity-70 duration-300'>
                        <MdEmail className='mr-2 text-stone-700'/>
                        Contact Us
                    </button>
                </div>
            </nav>
            <nav className='container flex justify-end divide-x px-4 md:px-12 mt-2 mx-auto'>
                <button className='px-3 py-2 transition hover:text-amber-700 rounded-l-lg duration-200'>
                    Vision and Mission
                </button>
                <button className='px-3 transition hover:text-amber-700 duration-200'>
                    About Us
                </button>
                <button className='px-3 transition hover:text-amber-700 duration-200'>
                    Product
                </button>
                <button className='px-3 transition hover:text-amber-700 rounded-r-lg duration-200'>
                    Inquiries
                </button>
            </nav>
        </>

    )
}