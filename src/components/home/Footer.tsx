import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

type Props = {}

function Footer({ }: Props) {
    return (
        <footer className='my-20 max-w-screen-xl mx-auto  px-10'>
           <div className='flex justify-between items-center border-t pt-5 '>
            <div className="font-bold tracking-tighter text-xl font-ibm">QuickCv</div>
            <div className='flex items-center gap-2 text-sm '>
                <span className="block">© 2024 QuickCv </span>
                <span className='block'>—</span>
                <Link href={"/"}> <Button variant={"link"} className='p-0' >Terms</Button> </Link>
                <span className='block'>&</span>
                <Link href={"/"}> <Button variant={"link"} className='p-0' >Privacy</Button> </Link>
                {/* <Button asChild > <Link href={"/ "}>Privacy</Link></Button> */}
            </div>
            </div>

        </footer>
    )
}

export default Footer