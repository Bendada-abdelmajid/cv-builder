import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { headers } from 'next/headers'

type Props = {}
const templates = [{
    img: "/templates/1.webp",
    height: "150px",
}, {
    img: "/templates/2.webp",
    height: "60px",
}, {
    img: "/templates/3.webp",
    height: "0",
}, {
    img: "/templates/4.webp",
    height: "60px",
}, {
    img: "/templates/5.webp",
    height: "150px",
}]

function Hero({ }: Props) {
    return (
        <section className=' mb-5'>

            <div className='container  text-center  pt-36  '>

                <h1 className='text-7xl uppercase font-ibm font-bold '>Build your <br /> Professional CV <br /> in Minutes</h1>
                <p className='max-w-3xl mt-10 text-lg !leading-[1.6] mx-auto'>Welcome to our CV builder! With our user-friendly platform, you can create a standout professional CV that captures employers attention in just a few minutes.</p>
                <div className="flex justify-center mt-14  items-center gap-5">
                    <Button className='text-xl' size={'xl'}>Get Started</Button>
                    <Button className='text-xl' variant={'ghost'} size={'xl'}>learn more</Button>
                </div>

            </div>
            <div className='px-2 grid w-full grid-cols-5 items-end gap-2 mt-[-50px]'>
                {templates.map((el, i) => (

                    <Image style={{ marginBottom: el.height }} key={i} src={el.img} alt='template' width={700} height={500} className='border w-full' />

                ))}
            </div>

        </section>
    )
}

export default Hero