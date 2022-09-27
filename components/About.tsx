import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { pageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: pageInfo
}

export default function About({ pageInfo }: Props) {
    return (
        <div className='relative h-screen flex flex-col text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center
        '>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>About</h3>
            <motion.div


            >
                <motion.img
                    initial={{
                        x: -300,
                        opacity: 0,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1
                    }}
                    className='relative   md:mb-0 flex-shrink-0     ' src={urlFor(pageInfo?.profilePic).url()}
                />

            </motion.div>
            <motion.div className='space-y-10 px-0 md:px-10 mt-16'
                initial={{ x: 0, opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3 }}>
                <h4 className='text-4xl font-semibold mt-5'>Here is a <span className='underline decoration-[#F7ABBA]/50'>little</span> background</h4>
                <p className='text-base font-light text-justify'>
                    {pageInfo?.backgroundInformation}
                </p>
            </motion.div>
        </div >
    )
}