"use client";

import { useState } from 'react';

import PersonalDetails from './sections/PersonalDetails';
import Link from 'next/link';
import { Button } from '../ui/button';
import Experience from './sections/Experience';
import Eeducation from './sections/Eeducation';

import Skills from './sections/Skills';
import Languages from './sections/Languages';
import Title from './ui/Title';

type Props = {}

const allInputs = {
    personalDetails: [
        {
            label: "job title",
            type: "text",
        },
        {
            label: "full name",
            type: "text",
        },
        {
            label: "email",
            type: "email",
        },
        {
            label: "phone",
            type: "tel",
        },
        {
            label: "linkedIn",
            type: "url",
        },
        {
            label: "country",
            type: "text",
        },
        {
            label: "postal code",
            type: "text",
        },
    ],

    experience: [

    ],

    skills: [
        {
            label: "skill",
            type: "text",
        },
        {
            label: "level",
            type: "text",
        },
    ],


    languages: [
        {
            label: "Language",
            type: "text",
        },
        {
            label: "Level",
            type: "text",
        },
    ],
};


const Editore = (props: Props) => {
    
    const [title, setTitle] = useState("Untitled")
    const [step, setStep] = useState(1)
    const widths = ["0%", "25%", "50%", "75%", "100%"]
    return (

        <div className=' min-h-screen flex flex-col'>
            <div className='grid grid-cols-[100px_1fr_100px] px-8 border-b j items-center py-5 mb-5 '>
                <Link href={"/"} className="font-bold tracking-tighter text-2xl font-ibm">QuickCv</Link>
                 <Title className='text-xl mx-auto text-center' value={title} setValue={setTitle} />
                <Button className='ml-auto' size={"icon"}>En</Button>
            </div>
            <div className='flex justify-between mx-10 items-center sticky top-0 bg-white py-5 '>
                <div className='w-full h-[2px] bg-gray-300 absolute top-1/2 left-0 -translate-y-1/2'>
                    <div style={{ width: widths[step - 1] }} className='h-full transition-all duration-200 bg-black'></div>
                </div>
                {[1, 2, 3, 4, 5].map(el => (

                    <span key={el} className={`grid relative z-10  place-content-center size-10 rounded-full border transition-colors duration-300 ${el < step ? "bg-black text-white border-black" : "bg-white"}`}>{el}</span>

                ))}
            </div>
            <div className='px-12 flex-1'>
                {step == 1 && <PersonalDetails />}
                {step == 2 && <Experience/>}
                {step == 3 && <Eeducation />}
                {step == 4 && <Skills />}
                {step == 5 && <Languages />}

            </div>
            <footer className='flex justify-between items-center p-10'>
                {step > 1 && <Button variant={"secondary"} onClick={() => setStep(prev => Math.max(prev - 1, 0))}>Prev</Button>}

                {step === 5 ? (
                    <Button className='ml-auto'>Download</Button>
                ) : (
                    <Button className='ml-auto' onClick={() => setStep(prev => Math.min(prev + 1, 5))}>
                        Next {step}
                    </Button>
                )}

            </footer>


        </div>
    )
}

export default Editore