import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-50 from-10% via-white via-70% to-cyan-50 to-100% overflow-hidden w-full h-full relative'>
      <div className="container h-fit w-fit mx-auto flex-col flex-1 relative z-10 p-8 my-auto justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-jersey text-dive-100 mx-auto text-center">
            About <span className='text-aqua-100'>Me</span>
        </h1>

        <Image src="/photos/alma.jpg" alt="Alma" width={916} height={916} className="w-full h-full md:w-60 md:h-60 rounded-full mx-auto mt-6 mb-6 shadow-xl" />

        <div className="w-full md:w-3/4 mx-auto flex-row outline-2 outline-aqua-100 shadow-md px-4 py-6 mt-8 rounded-2xl backdrop-blur-sm bg-white/50">
            <p className='text-center text-dive-200 text-md md:text-lg'>
                A final-year Computer Science student at <span className='text-yellow-600'>Universitas Indonesia</span>,
                passionate about combining technology and design.
                Currently specializing in <span className='text-blue-700'>Frontend Development</span> and <span className='text-pink-700'>UI/UX Design</span>, with experience in React, TypeScript, and Figma.
                <br /><br />
                Always eager to collaborate in crafting thoughtful, user-centered applications.
                If you&apos;re interested in working together or just want to connect, feel free to reach out!
            </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection