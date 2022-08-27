import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'


export default function Index(){

    return(
        <>
            <div className="relative py-5 text-center md:text-left" id='inquiries'>
                <img className="w-full absolute blur-sm" src="contactUs-bg.png" alt="" />
                <h3 className="relative text-4xl text-white font-bold text-center mb-4 pt-5 md:pt-12">Contact Us</h3>
                <div className="relative md:flex justify-center text-black md:text-white space-x-7">
                    <div className='px-4 md:px-12 py-5'>
                        <div className='flex items-center justify-center md:justify-end md:text-2xl'>
                            <BsTelephoneFill className='mr-2'/>
                            +62 813 1822 8922
                        </div>
                        <hr />
                        <h6 className='md:text-right md:text-xl'>TSAexport.id@gmail.com</h6>
                        <div>
                            9:00-18:00 (weekday) 
                            <span className='block'>Holidays (Saturdays, Sundays and National Holidays)</span>
                        </div>
                    </div>
                    <div>
                        <button className='flex items-center bg-amber-400 p-3 md:px-3 transition hover:opacity-70 active:opacity-100 duration-300 rounded-lg focus:ring focus:ring-orange-700 mx-auto'>
                            <MdEmail className='mr-2 text-stone-700'/>
                            <span className='text-orange-900 font-semi'>Application Form</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center md:py-28'>
                <img src="tsa-logo-hero.png" alt="" />
            </div>
        </>
    )
}