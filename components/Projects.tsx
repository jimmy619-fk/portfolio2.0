import React from 'react'
import { motion } from "framer-motion"
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {
    // const projects = [0, 1, 2, 3, 4]
    return (
        <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
        justify-evenly mx-auto items-center z-0 
        '>
            <h3 className='absolute top-24 text-2xl tracking-[20px] text-gray-500 uppercase'>Projects</h3>
            <h2 className='absolute top-36 text-gray-400 font-extralight'>Swipe Right To See More Projects</h2>
            <div className='relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
                {/* projects */}
                {
                    projects?.map((project, i) => (
                        <div key={project?._id} className='w-screen flex-shrink-0  snap-center flex flex-col space-y-5 p-20 h-screen md:p-56  items-center justify-center'>
                            <motion.img
                                initial={{
                                    y: -300,
                                    opacity: 0
                                }}
                                transition={{
                                    delay: 1

                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1
                                }}
                                viewport={{
                                    once: true
                                }}

                                src={urlFor(project?.image).url()} alt="" className='h-28 object-contain  ' />
                            <div className='max-w-7xl  md:px-10 px-0 space-y-10'>
                                <h4 className='text-2xl  font-semibold text-center'><span className='underline decoration-[#F7ABBA]/50'>Project study {i + 1} of {projects.length}:</span> {project?.title}</h4>
                                <p className='flex justify-center  ' ><span className='text-red-400 font-bold' >Visit Project:&nbsp; </span>{project.linktobuild}</p>
                                <div className='flex items-center space-x-2 justify-center'>

                                    {
                                        project?.technologies.map((tech) => (
                                            <img
                                                className='h-8 w-8'
                                                key={tech._id}
                                                src={urlFor(tech.image).url()}
                                                alt=""
                                            />
                                        ))
                                    }
                                </div>
                                <p className='text-lg text-center md:text-left font-extralight'> {project?.summary}</p>
                            </div>
                        </div>

                    ))}
            </div>

            <div className='absolute w-full top-[30%] bg-[#F7AB0A]/10  h-[400px] -skew-y-12'>

            </div>
        </div>
    )
}

export default Projects