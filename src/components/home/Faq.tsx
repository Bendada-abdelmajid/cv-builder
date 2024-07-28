/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image'
import { Button } from '@/components/ui/button';

type Props = {}
const faqs = [
    {
        question: "How do I create a resume using your platform?",
        answer: "Creating a resume with our platform is simple. Just sign up, choose a template, fill in your information, and download your resume in your preferred format."
    },
    {
        question: "Is my personal information secure on your site?",
        answer: "Yes, your data is protected by strong 256-bit encryption, ensuring your personal information remains private and secure."
    },
    {
        question: "Is your service completely free?",
        answer: "Yes, our platform is completely free. You can create, edit, and download your resume and cover letter without any charges."
    },
    {
        question: "What formats can I download my resume in?",
        answer: "You can download your resume in various formats, including Microsoft Word and PDF, with a single click."
    },
    {
        question: "Do you provide resume templates?",
        answer: "Yes, we offer a variety of professionally-designed resume templates that you can easily edit and download."
    },
    {
        question: "How does the automatic summary generator work?",
        answer: "Our automatic summary generator uses AI to create a powerful resume profile or cover letter based on the information you provide. Just input your details, and we’ll handle the rest."
    },
    {
        question: "Can I edit my resume after I’ve created it?",
        answer: "Absolutely! You can log in anytime to make updates or changes to your resume."
    },
    {
        question: "Do you offer support for writing cover letters?",
        answer: "Yes, our cover letter builder is just as easy to use as our resume builder and comes with elegant templates and examples."
    },
    {
        question: "How does the AI pre-written phrases feature work?",
        answer: "Our AI analyzes industry trends and data to suggest effective phrases and keywords that you can use in your resume, making it stand out to potential employers."
    },
    {
        question: "Are your resume formats optimized for ATS (Applicant Tracking Systems)?",
        answer: "Yes, our templates are designed to be ATS-friendly, ensuring that your resume gets through resume-filtering algorithms and reaches human eyes."
    },
    {
        question: "Can I get help if I have trouble using the site?",
        answer: "Yes, our support team is here to assist you. You can contact us via email or through our support chat for any questions or issues you encounter."
    }
];

function Faq({ }: Props) {
    const [showAll, setShowAll] = useState(false);
    const faqsToShow = showAll ? faqs : faqs.slice(0, 6);
    return (
        <section className='border-t py-32'>
            <div className="max-w-screen-xl px-10 mx-auto">
                <div className='flex justify-between items-center'>
                    <h2 className='text-6xl max-w-[500px] font-ibm  font-bold'>Frequently Asked Questions</h2>
                    <p className=' max-w-[400px]   border-l border-black pl-10 h-fit'>Find answers to common questions about our free and easy-to-use CV builder platform.</p>

                </div>
                <div className='grid grid-cols-2 mt-10 items-center'>
                    <div className='mt-20'>
                        <Accordion type="single" collapsible className="w-full">
                            {faqsToShow.map((el, i) => (
                                <AccordionItem key={"item-" + i} value={"item-" + i}>
                                    <AccordionTrigger>{el.question}</AccordionTrigger>
                                    <AccordionContent>{el.answer}</AccordionContent>
                                </AccordionItem>
                            ))}

                        </Accordion>
                        {!showAll && (
                            <Button onClick={()=> setShowAll(true)} className='mt-14'>Show More</Button>
                        )}
                    </div>
                    <div className='w-[90%] mx-auto'>
                        <Image src={"/profile.png"} width={900} height={700} alt={"faq"} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Faq