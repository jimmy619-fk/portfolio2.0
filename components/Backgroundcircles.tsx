import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function Backgroundcircles({ }: Props) {
    return (
        <motion.div

            initial={{
                opacity: 0
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1],
                borderRadius: ["20%", "20%", "40%", "80%", "20%"],
            }}
            transition={{
                duration: 2.5,
            }}
            className='relative flex justify-center items-center '>
            <div
                className='border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping absolute
                mt-52
                '/>
            <div
                className='border border-[#333333] rounded-full h-[300px] w-[300px] animate-ping absolute
                mt-52
                '/>
            <div
                className='border border-[#333333] rounded-full h-[500px] w-[500px] animate-ping absolute
                mt-52
                '/>
            <div
                className='border border-[#F7AB0A] rounded-full h-[650px] w-[650px] animate-pulse absolute
                mt-52 opacity-20 
                '/>
            <div
                className='border border-[#333333] rounded-full h-[700px] w-[700px] animate-pulse absolute
                mt-52 opacity-20 
                '/>

        </motion.div>
    )
}