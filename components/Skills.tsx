import React from 'react'
import Skillscard from './Skillscard'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '../typings'

type Props = {
    skills: SkillType[]
}

export default function Skills({ skills }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                delay: 1
            }}
            className='h-screen relative flex flex-col xl:flex-row items-center justify-center '>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>SKILLS</h3>
            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill to view percentage</h3>
            <div className='grid grid-cols-4 gap-5'>
                {
                    skills?.slice(0, skills.length / 2).map(skill => (
                        <Skillscard key={skill._id} skill={skill} />
                    ))
                }
                {
                    skills?.slice(skills.length / 2, skills.length).map(skill => (
                        <Skillscard key={skill._id} skill={skill} directionLeft />
                    ))
                }


            </div>
        </motion.div>
    )
}