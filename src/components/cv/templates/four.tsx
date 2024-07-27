import { useCVContext } from '@/lib/CVContext'
import Image from 'next/image'
//Raleway
import React from 'react'

type Props = {}

const Four = (props: Props) => {
    const { state } = useCVContext()
    const { personalDetails, education, experience, skills, languages } = state
    return (
        <div className='px-14 bg-[#e6e4e7] '>
            <section className='grid grid-cols-3 items-center relative'>
                <div className='w-[150px] h-[200px] absolute bottom-0 left-0 bg-[#d3a54f]'/>
                <Image className='w-[calc(100%-100px)] relative z-[1] grayscale h-[400px] object-cover ml-[100px]' src={"/profile.webp"} height={700} width={300} alt='profile' />
                <div className='col-span-2 p-10 *:block space-y-1 text-gray-500 *:text-sm'>
                    <span className='!text-lg font-medium text-gray-700'>{personalDetails["job title"] || ""}</span>
                    {personalDetails.phone &&
                        <a href="" >{personalDetails.phone}</a>}
                    {personalDetails.email &&
                        <a href=""> {personalDetails.email}</a>}
                    {personalDetails.country &&
                        <span >{personalDetails.country}</span>}
                </div>

            </section>
            <main className='grid grid-cols-3'>
                <section className=''>
                    <div className='w-[200px] h-[200px] bg-[#d3a54f]'/>
                </section>
                <section className='col-span-2 '>
                    <h1 className='text-6xl  uppercase p-10 -ml-[100px]'>{personalDetails["full name"] || ""}</h1>
                </section>

            </main>

        </div>
    )
}

export default Four