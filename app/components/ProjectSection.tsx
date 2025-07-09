import React from 'react'
import ProjectCard from './ProjectCard'
import { CVIcon, GithubIcon } from './Icons'

const ProjectSection = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-50 from-10% via-white via-70% to-cyan-50 to-100% overflow-hidden w-full h-full relative'>
      <div className="container h-fit w-full mx-auto flex-col flex-1 relative z-10 p-8 my-auto justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-jersey text-dive-100 mx-auto text-center">
            My <span>Projects</span>
        </h1>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <ProjectCard title="SafetyPin Website"
            imageSource='/projects/safetypin-web.png'
            >
                <p className="text-dive-300">
                    Lorem Ipsum Dolor amet.
                </p>

                <div className="flex flex-row gap-2 mt-6 ml-auto">
                    <a href="https://github.com/safetypin-official/web-landing-page"
                    target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition duration-300 text-sm font-medium">
                        Code
                        <GithubIcon className="ml-2 w-4 h-4" />
                    </a>
                    
                    <a href="https://www.figma.com/proto/kZWf200SaI0GUq1eimpYXi/WebPage?node-id=975-299&t=L7w2IbY1OJ5dOaB1-9&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=975%3A299&disable-default-keyboard-nav=1&hide-ui=1"
                    target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-aqua-100 text-white rounded-lg hover:bg-aqua-200 transition duration-300 text-sm font-medium">
                        Demo
                        <CVIcon className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </ProjectCard>

            <ProjectCard title="NawalaPatra Website"
            imageSource='/projects/nawalapatra-web.png'
            >

            </ProjectCard>

            <ProjectCard title="HSSN Piramida Hi-fi Prototype"
            imageSource='/projects/hssnpiramida.png'
            >

            </ProjectCard>

            <ProjectCard title="SafetyPin Mobile App"
            imageSource='/projects/safetypin-app.png'
            >

            </ProjectCard>

            <ProjectCard title="NawalaPatra Mobile App"
            imageSource='/projects/nawalapatra-app.png'
            >

            </ProjectCard>

            <ProjectCard title="Archimate Hi-fi Prototype"
            imageSource='/projects/archimate.png'
            >

            </ProjectCard>

            <ProjectCard title="SIBIQuest: Letters from Bhumiwangsa"
            imageSource='/projects/sibiquest.png'
            >
                
            </ProjectCard>

            <ProjectCard title="Hungre Etter"
            imageSource='/projects/hungre-etter.png'
            >
                
            </ProjectCard>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection