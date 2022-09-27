import React from 'react'
import { motion } from "framer-motion"
import { Skill } from '../typings';
import { urlFor } from '../sanity';
type Props = {
    skill: Skill;
    directionLeft?: boolean
}

export default function Skillscard({ skill, directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{
                    delay: 1
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                src={urlFor(skill?.image).url()} alt="" className='rounded-full border  h-16 w-16 object-cover border-gray-500
                 filter group-hover:grayscale transition duration-300 ease-in-out
                ' />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
            group-hover:bg-white h-16 w-16 rounded-full
            '>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl font-bold text-black opacity-100'>{skill.progress}%</p>
                </div>
            </div>
        </div>
    )
}