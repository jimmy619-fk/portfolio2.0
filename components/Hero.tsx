import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { pageInfo } from '../typings'
import Backgroundcircles from './Backgroundcircles'
type Props = {
    pageInfo: pageInfo
}

export default function Hero({ pageInfo }: Props) {
    // typwriterhook
    const [text, count] = useTypewriter({
        words: [`Hi, my name is ${pageInfo?.name}`, 'Guy-who-loves-pizza.tsx', 'ButLovesToCodeMore'],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center
        overflow-hidden
        '>
            <Backgroundcircles />
            <div className='relative h-32 w-32 '>
                <Image src={urlFor(pageInfo?.heroImage).url()} layout="fill" objectFit="contain" className='rounded-full object-contain' />
            </div>
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold px-10'><span >{text}</span><Cursor cursorColor='#F7AB0A' /></h1>
                <div className='mt-2'>
                    <Link href="#about">
                        <button className='herobtn'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='herobtn'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='herobtn'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='herobtn'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}