"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import {
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
type Props = {}

function Header({ }: Props) {
    return (
        <header className='fixed w-screen top-0 right-0 z-50 h-[70px] border-b'>
            <div className="container h-full flex justify-between items-center gap-5">
                <nav className='flex items-center gap-20'>
                    <div className="font-bold tracking-tighter text-2xl font-ibm">QuickCv</div>
                    <ul className='flex items-center gap-10'>
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Templates</Link>
                        </li>
                        <li>
                            <Link href={"/"}>AboutUs</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-5">

                    <SignedOut>
                        <Link href="/sign-in">
                            <Button variant={'ghost'}>
                                Log in
                            </Button>
                        </Link>
                        <Link href="/sign-up">
                            <Button className='bg-black'>
                                Sing up <span className="italic font-light">&nbsp;— it's free</span>
                            </Button>
                        </Link>
                    </SignedOut>

                    <SignedIn>
                        <Link href="/dashboard">
                            <Button className='bg-black'>
                                dashboard
                            </Button>
                        </Link>
                        <UserButton appearance={{elements:{avatarBox:{width:45, height:45, border:"1px solid #222"}}}} />
                    </SignedIn>
                </div>

            </div>
        </header>
    )
}

export default Header