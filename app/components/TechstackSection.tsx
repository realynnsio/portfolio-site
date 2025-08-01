import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const TechstackSection = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-50 from-10% via-white via-70% to-cyan-50 to-100% overflow-hidden w-full h-full relative'>
      <div className="container h-fit w-fit mx-auto flex-col flex-1 relative z-10 px-8 pt-8 my-auto justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-jersey text-dive-100 mx-auto text-center">
            Technologies & Tools
        </h1>
      </div>

      <div className="w-full mx-auto my-4 backdrop-blur-sm mt-16 pb-8">
          <Marquee
              className="w-full h-full justify-center items-center overflow-clip"
              speed={50}
              gradient={true}
              play={true}
              pauseOnHover={true}
              gradientColor='#ecfeff'
              gradientWidth={200}
              loop={0}
              autoFill={true}
              >
              
              <div className="flex items-center gap-x-16">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Html-1.svg" alt="HTML" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" alt="Django" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg" alt="Flutter" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="GitHub" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Adobe Photoshop" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL" width={20} height={16} className="h-16 w-auto" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg" alt="SQLite" width={20} height={16} className="h-16 w-auto" />
              </div>
          </Marquee>
        </div>
    </div>
  )
}

export default TechstackSection