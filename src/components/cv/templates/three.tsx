import { useCVContext } from '@/lib/CVContext'

import React from 'react'

type Props = {}

const Three = (props: Props) => {

    const { state} = useCVContext()
    const { personalDetails, education, experience, skills, languages } = state
    return (
        <div className='p-14 space-y-12 font-serif'>
            <div className=' text-center'>
                <h1 className='text-4xl capitalize font-medium mb-5'>
                    {personalDetails["full name"] || ""}
                </h1>
                <div className='flex justify-center items-center gap-3 *:block *:h-[10px] *:leading-[8px] *:text-lg divide-x-2 divide-black *:pl-3 first:pl-0'>
                    <span>{personalDetails["job title"] || ""}</span>
                    {personalDetails.phone &&
                        <a href="" >{personalDetails.phone}</a>}
                    {personalDetails.email &&
                        <a href=""> {personalDetails.email}</a>}
                    {personalDetails.country &&
                        <p >{personalDetails.country}</p>}
                </div>
            </div>

            <section className='grid grid-cols-3 pt-5 border-t-2 border-black'>
                <h2 className='text-2xl capitalize font-medium'>Profile</h2>
                <p className='text-lg col-span-2 font-light cv-cont' dangerouslySetInnerHTML={{ __html: personalDetails.summary }} />
            </section>
            {experience.list.length > 0 && <section className='pt-5 border-t-2 border-black space-y-5'>
                <h2 className='text-2xl capitalize font-medium'>{experience.name || ""}</h2>
                {experience.list.map((el, i) => (<div key={el["job title"] + "experience" + i} className='grid grid-cols-3 '>
                    <span className='block  text-gray-900 font-light'>{el.startdate} - {el.enddate} </span>
                    <div className='col-span-2'>
                        <div className="flex justify-between items-center ">
                            <h4 className=' text-lg'>{el["job title"]}, {el.employer}</h4>
                            <span className='text-gray-700 font-light'>{el.city}</span>
                        </div>
                        <div className="cv-cont mt-5 pl-2" dangerouslySetInnerHTML={{ __html: el.description }} />
                    </div>
                </div>))}
            </section>}
            {education.list.length > 0 && <section className='pt-5 border-t-2 border-black space-y-5'>
                <h2 className='text-2xl capitalize font-medium'>{education.name || ""}</h2>
                {education.list.map((el, i) => (<div key={el.degree + "eduction" + i} className='grid grid-cols-3 '>
                    <span className='block  text-gray-900 font-light'>{el.startdate} - {el.enddate} </span>
                    <div className='col-span-2'>
                        <div className="flex justify-between items-center ">
                            <h4 className=' text-lg'>{el.degree}, {el.school}</h4>
                            <span className='text-gray-700 font-extralight'>{el.city}</span>
                        </div>
                    </div>
                </div>))}
            </section>}
            {skills.list.length > 0 && <section className='pt-5 grid grid-cols-3  border-t-2 border-black space-y-5'>
                <h2 className='text-2xl capitalize font-medium'>{skills.name || ""}</h2>
                <div className='grid grid-cols-2 col-span-2 gap-x-10 gap-y-2 '>
                    {skills.list.map((el, i) => (
                        <div key={el.skill + "skill" + i} className='flex justify-between items-center'>
                            <h4 className=' text'>{el.skill}</h4>
                            <span className='text-gray-700 font-light'>{el.level}</span>
                        </div>))}
                </div>
            </section>}
            {languages.list.length > 0 && <section className='pt-5 grid grid-cols-3  border-t-2 border-black space-y-5'>
                <h2 className='text-2xl capitalize font-medium'>{languages.name || ""}</h2>
                <div className='grid grid-cols-2 col-span-2 gap-x-10 gap-y-2 '>
                    {languages.list.map((el, i) => (
                        <div key={el.language + "language" + i} className='flex justify-between items-center'>
                            <h4 className=' text'>{el.language}</h4>
                            <span className='text-gray-700 font-light'>{el.level}</span>
                        </div>))}
                </div>
            </section>}

        </div >
    )
}

export default Three