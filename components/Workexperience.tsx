import React from 'react'
import { motion } from "framer-motion"
import Experiencecaed from './Experiencecaed'
import { Experience } from '../typings'
type Props = {
    experiences: Experience[]
}

export default function Workexperience({ experiences }: Props) {
    return (
        <div className='h-screen flex relative overflow-hidden  text-lft md:flex-row
        max-w-full px-10 justify-evenly mx-auto items-center 
        '>

            <h3 className='rotate-[270deg] top-24 uppercase tracking-[20px] text-gray-500 text-2xl hidden md:inline-block'>experience</h3>

            <div className='flex overflow-x-scroll w-full snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
                {experiences?.map(experience => (
                    <Experiencecaed key={experience._id} experience={experience} />
                ))}

                {/* <Experiencecaed />
                <Experiencecaed />
                <Experiencecaed />
                <Experiencecaed /> */}
            </div>
        </div>

    )
}