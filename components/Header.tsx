import React from 'react'

import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import { Social } from '../typings';
type Props = {
    socials: Social[]
}

export default function Header({ socials }: Props) {
    return (
        <header className='sticky top-0 flex justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center'>
            <motion.div className='flex flex-row  items-center'
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5
                }}
            >
                {/* social icons */}
                {socials.map((social) => (
                    <SocialIcon url={social.url}
                        key={social._id}
                        fgColor='gray' bgColor='transparent'
                    />
                ))}

                {/* <SocialIcon url="https://github.com/jimmy619-fk"
                    fgColor='gray' bgColor='transparent' network="github"
                />
                <SocialIcon url="https://linkedin.com/in/muhammadjamshaid"
                    fgColor='gray' bgColor='transparent'
                /> */}
            </motion.div>
            <motion.div className='flex flex-row items-center text-grey-300 cursor-pointer '
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
            >
                <SocialIcon url="https://jaketrent.com" network="email"
                    fgColor='gray' bgColor='transparent' />
                <p className='hidden md:inline-flex text-sm text-gray-400'>GET IN TOUCH</p>
            </motion.div>
        </header>
    )
}
