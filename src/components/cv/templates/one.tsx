"use client";
import { useCVContext } from '@/lib/CVContext'
import Image from 'next/image';
import React from 'react'

type TitleProps = {
    title: String
}
const Title = ({ title }: TitleProps) => {
    return (
        <>
            <h3 className='text-4xl mb-2 font-medium capitalize'>{title}</h3>
            <span className='block w-[50px] border-b-2 h-1 border-black mb-7' />
        </>
    )
}
const ProgressPar = ({ width }: { width: string }) => {
    return (
        <div className='w-full h-2 bg-gray-300  relative overflow-hidden'>
            <span style={{ width }} className='block h-full absolute top-0 left-0  bg-gray-900' />
        </div>
    )
}
const widths = ["20%", "40%", "60%", "80%", "100%"]


type Props = {
  

}

const One = (props: Props) => {

    const { state, skillsLevels, languageLevels } = useCVContext()
    const { profileImage, personalDetails, education, experience, skills, languages } = state
    return (
      <div className='p-14'>
            <div className='grid grid-cols-3 pb-10'>
                <div>
                <h1 className='text-7xl -ml-2 font-medium uppercase'>
                    {personalDetails["full name"] || ""}
                </h1>
                <p className='text-2xl mt-5 font-light'>  {personalDetails["job title"] || ""}</p>
                </div>
                <div className='col-span-2'>
                  {profileImage &&   <Image className='ml-auto rounded object-cover object-top size-[200px] ' src={profileImage.url} alt='profile-image' width={200} height={200}/>}
                </div>
            
            </div>
            <div className='grid grid-cols-3 border-t-2 border-gray-400'>

                <section className='border-r-2 pr-10 pt-10 border-gray-400 space-y-12'>
                    <div >
                        <Title title={personalDetails.name || ""} />
                        {personalDetails.phone && <><h4 className='text-lg font-medium mt-3 mb-1'>PHONE</h4>
                            <a href="" className='font-extralight'>{personalDetails.phone}</a> </>}
                        {personalDetails.email && <><h4 className='text-lg font-medium mt-3 mb-1'>EMAIL</h4>
                            <a href="" className="font-extralight"> {personalDetails.email}</a> </>}
                        {personalDetails.country && <><h4 className='text-lg font-medium mt-3 mb-1'>country</h4>
                            <p className="font-extralight">{personalDetails.country}</p> </>}
                    </div>
                    {skills.list.length > 0 && <div >
                        <Title title={skills.name || ""} />
                        {skills.list.map((el, i) => (
                            <div key={el.skill + i}>
                                <h4 className='text-lg mt-4 mb-1'>{el.skill}</h4>
                                {el.skill && <ProgressPar width={widths[skillsLevels.indexOf(el.level)]} />}

                            </div>
                        ))}
                    </div>}
                    {languages.list.length > 0 && <div  >
                        <Title title={languages.name || ""} />
                        {languages.list.map((el, i) => (
                            <div key={el.language + i}>
                                <h4 className='text-lg mt-4 mb-1'>{el.language}</h4>
                                {el.language && <ProgressPar width={widths[languageLevels.indexOf(el.level)]} />}

                            </div>
                        ))}
                    </div>}
                </section>
                <section className='p-10 col-span-2'>
                    <Title title={"PROFILE"} />
                    <p className='mb-10 text-lg font-extralight pb-10 border-b-2 border-gray-400 cv-cont' dangerouslySetInnerHTML={{ __html: personalDetails.summary }} />


                    {experience.list.length > 0 && <> <Title title={experience.name || ""} />
                        {experience.list.map((el, i) => (
                            <div key={el["job title"] + "experience" + i} className='mb-7'>
                                <div className="flex justify-between items-center ">
                                    <h4 className=' text-lg'>{el["job title"]}, {el.employer}</h4>
                                    <span className='text-gray-700 font-extralight'>{el.city}</span>
                                </div>
                                <span className='block mt-1 text-gray-900 font-extralight'>{el.startdate} - {el.enddate} </span>
                                <div className="cv-cont mt-5 pl-4" dangerouslySetInnerHTML={{ __html: el.description }} />
                            </div>
                        ))} </>}
                    {education.list.length > 0 && <><span className='block border-gray-400 h-1 border-t-2 my-10' />
                        <Title title={education.name || ""} />
                        <div className="space-y-4">
                            {education.list.map((el, i) => (
                                <div key={el.degree + "eduction" + i}>
                                    <div className="flex justify-between items-center ">
                                        <h4 className=' text-lg font-medium'>{el.degree}, {el.school}</h4>
                                        <span className='text-gray-700 font-extralight'>{el.city}</span>
                                    </div>
                                    <span className='block mt-1 text-gray-900 font-extralight'>{el.startdate} - {el.enddate} </span>
                                </div>
                            ))}
                        </div>
                    </>}
                </section>
            </div>
        </div>
    )
}

export default One