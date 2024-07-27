"use client";
import { Work_Sans } from "next/font/google";
import { useCVContext } from '@/lib/CVContext'
//
import React from 'react'
const work_Sans = Work_Sans({ subsets: ["latin"] });
type TitleProps = {
    title: String
}
const Title = ({ title }: TitleProps) => {
    return (
        <>
            <h3 className='text-2xl tracking-wider mb-2 font-semibold uppercase'>{title}</h3>
            <span className='block w-full border-b-2 h-1 border-gray-800 mb-7' />
        </>
    )
}
const ProgressPar = ({ width }: { width: number }) => {
    return (
        <div className='flex items-center gap-1'>
            {Array(5).fill(0).map((el, i) => (
                <span key={i} className={`size-3 rounded-full border-2 border-black block ${width  >= i ? "bg-black " :""}`}></span>
            ))}
        </div>
    )
}



type Props = {


}

const Two = (props: Props) => {

    const { state, skillsLevels, languageLevels } = useCVContext()
    const { personalDetails, education, experience, skills, languages } = state
    return (
        <div className={work_Sans.className +' bg-gradient-to-r from-slate-50 from-35% to-30% to-white p-14'}>
            <div className='w-[60%] border-2 border-black p-10 text-center m-auto bg-white'>
                <h1 className='text-3xl tracking-wider font-semibold uppercase'>
                    {personalDetails["full name"] || ""}
                </h1>
                <p className='text-2xl mt-3 uppercase text-gray-600'>  {personalDetails["job title"] || ""}</p>
            </div>
            <div className='grid grid-cols-3 mt-10'>

                <section className='p-10  space-y-12'>
                    <div >
                        <Title title={personalDetails.name || ""} />
                        {personalDetails.phone && <><h4 className='font-medium mt-3 mb-1 uppercase'>PHONE</h4>
                            <a href="" className='font-extralight'>{personalDetails.phone}</a> </>}
                        {personalDetails.email && <><h4 className='font-medium mt-3 mb-1 uppercase'>EMAIL</h4>
                            <a href="" className="font-extralight"> {personalDetails.email}</a> </>}
                        {personalDetails.country && <><h4 className='font-medium mt-3 mb-1 uppercase'>country</h4>
                            <p className="font-extralight">{personalDetails.country}</p> </>}
                    </div>
                    {skills.list.length > 0 && <div >
                        <Title title={skills.name || ""} />
                        {skills.list.map((el, i) => (
                            <div key={el.skill + i}>
                                <h4 className='text-lg mt-4 mb-1'>{el.skill}</h4>
                                {el.skill && <ProgressPar width={skillsLevels.indexOf(el.level)} />}

                            </div>
                        ))}
                    </div>}
                    {languages.list.length > 0 && <div  >
                        <Title title={languages.name || ""} />
                        {languages.list.map((el, i) => (
                            <div key={el.language + i}>
                                <h4 className='text-lg mt-4 mb-1'>{el.language}</h4>
                                {el.language && <ProgressPar width={languageLevels.indexOf(el.level)} />}

                            </div>
                        ))}
                    </div>}
                </section>
                <section className='p-10 col-span-2'>
                    <Title title={"PROFILE"} />
                    <p className='text-lg font-extralight pb-14 cv-cont' dangerouslySetInnerHTML={{ __html: personalDetails.summary }} />


                    {experience.list.length > 0 && <> <Title title={experience.name || ""} />
                        {experience.list.map((el, i) => (
                            <div key={el["job title"] + "experience" + i} className='mb-7'>
                                <div className="flex justify-between items-center ">
                                    <h4 className=' text-lg font-medium'>{el["job title"]}, {el.employer}</h4>
                                    <span className='text-gray-700 '>{el.city}</span>
                                </div>
                                <span className='block mt-1 text-gray-900 font-extralight'>{el.startdate} - {el.enddate} </span>
                                <div className="cv-cont mt-5 pl-4" dangerouslySetInnerHTML={{ __html: el.description }} />
                            </div>
                        ))} </>}
                    {education.list.length > 0 && <div className='mt-14'>
                        <Title title={education.name || ""} />
                        <div className="space-y-4">
                            {education.list.map((el, i) => (
                                <div key={el.degree + "eduction" + i}>
                                    <div className="flex justify-between items-center ">
                                        <h4 className=' text-lg font-medium'>{el.degree}, {el.school}</h4>
                                        <span className='text-gray-700 '>{el.city}</span>
                                    </div>
                                    <span className='block mt-1 text-gray-900 font-extralight'>{el.startdate} - {el.enddate} </span>
                                </div>
                            ))}
                        </div>
                    </div>}
                </section>
            </div>
        </div>
    )
}

export default Two