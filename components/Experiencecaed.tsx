import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
    experience: Experience
}

export default function Experiencecaed({ experience }: Props) {
    return (
        <article

            className='flex flex-col   text-left justify-center m-28 p-10 opacity-70 hover:opacity-100
            snap-center
            '>
            <motion.img


                src={urlFor(experience?.companyImage).url()} alt="" className='w-28 h-28 rounded-full  
            object-cover object-center text-white animate-bounce 
            '/>
            <h1 className='text-2xl font-semibold'>{experience.company} </h1>
            <h4 className='font-light'>Role: {experience.jobTitle}</h4>

            <div className='flex space-x-2 mt-2'>
                {experience.technologies.map(tech => (
                    <img
                        key={tech._id}
                        className="h-8 w-8 rounded-full"
                        src={urlFor(tech.image).url()}
                    />
                ))}
            </div>
            <p className='font-extralight mt-2'>{new Date(experience.dateStarted).toDateString()}-{
                experience.iscurrentlyworkinghere ? 'Present' : 'NotWorkingNow'}</p>
            <motion.ul className='list-disc mt-2 w-60'
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    delay: 0.7
                }}
            >
                {
                    experience.points.map((point, i) => (
                        <li key={i} className="text-justify">{point}</li>
                    ))
                }

                {/* <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, error!</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ullam illo at ratione incidunt aliquid maiores voluptates officiis tempora optio! Repellendus, vitae similique? Sequi perspiciatis, odit aperiam blanditiis assumenda molestiae!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magni!</li> */}

            </motion.ul>

        </article >

    )
}