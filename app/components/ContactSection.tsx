import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const ContactSection = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-50 from-10% via-white via-70% to-cyan-50 to-100% overflow-hidden w-full h-full relative'>
        <div className="container h-fit w-fit mx-auto flex-col flex-1 relative z-10 p-8 my-auto justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-jersey text-dive-100 mx-auto text-center">
                Get in <span className='text-aqua-100'>Touch!</span>
            </h1>

            <div className="w-full mx-auto py-6 flex flex-row gap-6 justify-center items-center">
                <a href="mailto:alma.nashrida@gmail.com" target='_blank' className="hover:scale-110 transition duration-300 ease-in-out"> 
                    <IoMdMail className="text-4xl text-sand-100" />
                </a>

                <a href="https://www.linkedin.com/in/alma-putri-nashrida/" target='_blank' className="hover:scale-110 transition duration-300 ease-in-out">
                    <FaLinkedin className="text-4xl text-[#0e76a8]" />
                </a>

                <a href="https://github.com/realynnsio" target='_blank' className="hover:scale-110 transition duration-300 ease-in-out">
                    <FaGithub className="text-4xl text-neutral-950" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default ContactSection