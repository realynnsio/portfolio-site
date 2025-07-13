import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
    title?: string;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    imageSource?: string;
    imageAlt?: string;
}

const ProjectCard = ({
    title = "",
    className,
    children,
    style = {},
    imageSource = "/photos/alma.jpg",
    imageAlt = "Image",
}: ProjectCardProps) => {
  return (
    <div className={`w-full h-fit outline-2 outline-aqua-100 shadow-md rounded-2xl backdrop-blur-sm bg-white/30 ${className} hover:scale-105 transition duration-300 ease-in-out`}
    style={style}>
        <Image width={600} height={400} className="rounded-t-2xl h-fit w-full object-cover" src={`${imageSource}`} alt={`${imageAlt}`} />
        <div className="p-5 w-full h-fit flex flex-col justify-between items-start">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-dive-100">
                {title}
            </h5>
            {children}
        </div>
    </div>
  )
}

export default ProjectCard