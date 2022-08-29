import { useContext, useEffect } from 'react'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import { useOpenFeedbackModalContext,OpenFeedbackModalContext } from '../home'
import ReactModal from 'react-modal'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '20px',
      width: '50%'
    },
  };

export default function Layout() {
    let subtitle;
    const { isOpen, setIsOpen }= useOpenFeedbackModalContext()
   

    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    

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
                        <button 
                        className='flex items-center bg-amber-400 p-3 md:px-3 transition hover:opacity-70 active:opacity-100 duration-300 rounded-lg focus:ring focus:ring-orange-700 mx-auto'
                        onClick={()=>setIsOpen(!isOpen)}
                        >
                            <MdEmail className='mr-2 text-stone-700'/>
                            <span className='text-orange-900 font-semi'>Application Form</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center md:py-28'>
                <img src="tsa-logo-hero.png" alt="" />
            </div>

            <ReactModal
            isOpen={isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            // style={customStyles}
            style={{ overlay: {zIndex: 1000}}}
            contentLabel="Aplication Form Modal"
            className={'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-4/5 md:w-1/2 border rounded-xl p-4 z-50'}
            >
                <form className="md:p-8">
                    <h3 className='text-xl text-orange-900 mb-3 text-center'>Aplication Form</h3>
                    <div className='mb-2'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='email'
                        className='border-2 block w-full rounded-lg px-2 md:py-1 hover:border-orange-900' required
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email'
                        className='border-2 block w-full rounded-lg px-2 md:py-1 hover:border-orange-900' required
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="5"
                        className='border-2 block w-full rounded-lg px-2 md:py-1 hover:border-orange-900' required
                        ></textarea>
                    </div>
                    <button
                    className='py-1 px-4 bg-orange-900 rounded-lg drop-shadow-sm text-white w-full hover:bg-orange-800 focus:ring focus:ring-orange-700 active:bg-orange-900 mb-2'
                    type={'submit'}
                    >
                        Send
                    </button>
                    <button
                    className='py-1 px-4 bg-red-500 rounded-lg drop-shadow-sm text-white w-full hover:bg-red-600 focus:ring focus:ring-red-400 active:bg-red-4000'
                    onClick={()=>setIsOpen(false)}
                    >
                        Cancel
                    </button>
                </form>
                


            </ReactModal>
        </>
    )
}