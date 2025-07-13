import React from 'react'
import ProjectCard from './ProjectCard'
import { CVIcon } from './Icons'
import { FaGithub, FaFigma, FaHtml5, FaBootstrap, FaReact, FaUnity, FaPaintBrush } from "react-icons/fa";
import { FaFlutter, FaDartLang } from "react-icons/fa6";
import { SiDjango, SiTypescript, SiGodotengine } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const ProjectSection = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-50 from-10% via-white via-70% to-cyan-50 to-100% overflow-hidden w-full h-full relative'>
      <div className="container h-fit w-full mx-auto flex-col flex-1 relative z-10 p-8 my-auto justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-jersey text-dive-100 mx-auto text-center">
            My <span className='text-aqua-100'>Projects</span>
        </h1>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <ProjectCard title="SafetyPin Website"
            imageSource='/projects/safetypin-web.png'
            >
              <p className="text-dive-300">
                  SafetyPin is a real-time crime mapping app designed to keep you informed and protected.
                  For the website, I created a landing page design using Figma that showcases the app's features and benefits.
              </p>

              <div className="flex flex-row mt-6 justify-between w-full items-end">
                <div className="flex flex-row gap-2 text-aqua-100 mr-auto mb-2">
                  <FaFigma className="w-6 h-6" />
                </div>

                <div className="flex flex-row gap-2 mt-6 ml-auto">
                  <a href="https://www.figma.com/proto/kZWf200SaI0GUq1eimpYXi/WebPage?node-id=975-299&t=L7w2IbY1OJ5dOaB1-9&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=975%3A299&disable-default-keyboard-nav=1&hide-ui=1"
                  target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-aqua-100 text-white rounded-lg hover:bg-aqua-200 transition duration-300 text-sm font-medium">
                      Demo
                      <CVIcon className="ml-2 w-4 h-4" />
                  </a>

                </div>
              </div>
                
            </ProjectCard>

            <ProjectCard title="NawalaPatra Website"
            imageSource='/projects/nawalapatra-web.png'
            >
              <p className="text-dive-300">
                NawalaPatra is a book cataloging app created with Django and Flutter.
                For the web version, I created the main library module that showcases all the available books and allows users to browse and search through them.
              </p>

              <div className="flex flex-row mt-6 justify-between w-full items-end">
                <div className="flex flex-row gap-2 text-aqua-100 mr-auto mb-2">
                  <SiDjango className="w-6 h-6" />
                  <FaHtml5 className="w-6 h-6" />
                  <FaBootstrap className="w-6 h-6" />
                  <IoLogoJavascript className="w-6 h-6" />

                </div>

                <div className="flex flex-row gap-2 mt-6 ml-auto">
                  <a href="https://github.com/NawalaPatra-e12/NawalaPatra"
                  target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition duration-300 text-sm font-medium">
                      <FaGithub className="mr-2 w-4 h-4" />
                      Code
                      <CVIcon className="ml-2 w-4 h-4" />
                  </a>
                  
                </div>
              </div>

            </ProjectCard>

            <ProjectCard title="HSSN Piramida Hi-fi Prototype"
            imageSource='/projects/hssnpiramida.png'
            >
              <p className="text-dive-300">
                HSSN Piramida is a homeschool located in Bogor that focuses on teaching students with special needs.
                In this project, I redesigned their landing page using Figma, creating a modern and user-friendly version that highlights the school's mission and values.
              </p>

              <div className="flex flex-row mt-6 justify-between w-full items-end">
                <div className="flex flex-row gap-2 text-aqua-100 mr-auto mb-2">
                  <FaFigma className="w-6 h-6" />
                </div>

                <div className="flex flex-row gap-2 mt-6 ml-auto">
                  <a href="https://www.figma.com/proto/ztPZo8pPYd3zx7Hjvpw5ve/HSSN-Piramida-Website-UI--Copy-?node-id=11-7&t=R2tD5PgxJjtNJimD-9&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A7&disable-default-keyboard-nav=1&hide-ui=1"
                  target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-aqua-100 text-white rounded-lg hover:bg-aqua-200 transition duration-300 text-sm font-medium">
                      Demo
                      <CVIcon className="ml-2 w-4 h-4" />
                  </a>

                </div>
              </div>

            </ProjectCard>

            <ProjectCard title="SafetyPin Mobile App"
            imageSource='/projects/safetypin-app.png'
            >
              <p className="text-dive-300">
                  SafetyPin is a real-time crime mapping app designed to keep you informed and protected.
                  In this project, I worked as a Frontend Developer to create the user-interface of the app using React Native and TypeScript.
              </p>

              <div className="flex flex-row mt-6 justify-between w-full items-end">
                <div className="flex flex-row gap-2 text-aqua-100 mr-auto mb-2">
                  <FaReact className="w-6 h-6" />
                  <SiTypescript className="w-6 h-6" />
                </div>

                <div className="flex flex-row gap-2 mt-6 ml-auto">
                  <a href="https://github.com/safetypin-official/mobile-app"
                  target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition duration-300 text-sm font-medium">
                      <FaGithub className="mr-2 w-4 h-4" />
                      Code
                      <CVIcon className="ml-2 w-4 h-4" />
                  </a>
                  
                  <a href="https://play.google.com/store/apps/details?id=com.safetypin"
                  target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-aqua-100 text-white rounded-lg hover:bg-aqua-200 transition duration-300 text-sm font-medium">
                      Demo
                      <CVIcon className="ml-2 w-4 h-4" />
                  </a>

                </div>
              </div>

            </ProjectCard>

            <ProjectCard title="NawalaPatra Mobile App"
            imageSource='/projects/nawalapatra-app.png'
            >
              <p className="text-dive-300">
                NawalaPatra is a book cataloging app created with Django and Flutter.
                For the app version, I created the main library module that showcases all the available books and allows users to browse and search through them.
              </p>

              <div className="flex flex-row mt-6 justify-between w-full items-end">
                <div className="flex flex-row gap-2 text-aqua-100 mr-auto mb-2">
                  <FaFlutter className="w-6 h-6" />
                  <FaDartLang className="w-6 h-6" />

                </div>

                <div className="flex flex-row gap-2 mt-6 ml-auto">
                  <a href="https://github.com/NawalaPatra-e12/NawalaPatra-Mobile"
                  target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition duration-300 text-sm font-medium">
                      <FaGithub className="mr-2 w-4 h-4" />
                      Code
                      <CVIcon className="ml-2 w-4 h-4" />
                  </a>
                  
                </div>
              </div>

            </ProjectCard>

            <ProjectCard title="Archimate Hi-fi Prototype"
            imageSource='/projects/archimate.png'
            >
              <p className="text-dive-300">
                Archimate is an app concept that aims to help users find and connect with architects for their construction needs.
                In this commissioned project, I created a high-fidelity prototype using Figma that showcases the app's features and user interface.
              </p>

              <div className="flex flex-row mt-6 justify-between w-full items-end">
                <div className="flex flex-row gap-2 text-aqua-100 mr-auto mb-2">
                  <FaFigma className="w-6 h-6" />
                </div>

                <div className="flex flex-row gap-2 mt-6 ml-auto">
                  <a href="https://www.figma.com/proto/SFH3WPX8ceKHs43FWP4M1H/Archimate?node-id=9-57&t=SYDKYBrvFYU1PP1u-9&scaling=scale-down&content-scaling=fixed&page-id=1%3A148&starting-point-node-id=9%3A57&disable-default-keyboard-nav=1&hide-ui=1"
                  target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-aqua-100 text-white rounded-lg hover:bg-aqua-200 transition duration-300 text-sm font-medium">
                      Demo
                      <CVIcon className="ml-2 w-4 h-4" />
                  </a>

                </div>
              </div>

            </ProjectCard>

            <ProjectCard title="SIBIQuest: Letters from Bhumiwangsa"
            imageSource='/projects/sibiquest.png'
            >
              <p className="text-dive-300">
                SIBIQuest is a game created to help children learn about SIBI (Sistem Isyarat Bahasa Indonesia).
                This game was created for GEMASTIK16, a national technology competition in Indonesia.
                In this project, I worked as the team leader and UI artist.
              </p>

              <div className="flex flex-row mt-6 justify-between w-full items-end">
                <div className="flex flex-row gap-2 text-aqua-100 mr-auto mb-2">
                  <FaUnity className="w-6 h-6" />
                  <FaPaintBrush className="w-6 h-6" />
                </div>

                <div className="flex flex-row gap-2 mt-6 ml-auto">
                  <a href="https://uttsada-jason.itch.io/sibiquest"
                  target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-aqua-100 text-white rounded-lg hover:bg-aqua-200 transition duration-300 text-sm font-medium">
                      Demo
                      <CVIcon className="ml-2 w-4 h-4" />
                  </a>

                </div>
              </div>
                
            </ProjectCard>

            <ProjectCard title="Hungre Etter"
            imageSource='/projects/hungre-etter.png'
            >
              <p className="text-dive-300">
                Hungre Etter is a solo-created game I made as part of my midterm project for the Game Development course at UI.
                In this project, I created a Visual Novel x 2D RPG game using Godot; with all the art assets created by myself.
              </p>

              <div className="flex flex-row mt-6 justify-between w-full items-end">
                <div className="flex flex-row gap-2 text-aqua-100 mr-auto mb-2">
                  <SiGodotengine className="w-6 h-6" />
                  <FaPaintBrush className="w-6 h-6" />
                </div>

                <div className="flex flex-row gap-2 mt-6 ml-auto">
                  <a href="https://realynnsio.itch.io/hungre-etter"
                  target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-aqua-100 text-white rounded-lg hover:bg-aqua-200 transition duration-300 text-sm font-medium">
                      Demo
                      <CVIcon className="ml-2 w-4 h-4" />
                  </a>

                </div>
              </div>
                
            </ProjectCard>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection