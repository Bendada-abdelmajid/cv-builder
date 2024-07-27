import Image from 'next/image';
import React from 'react'

/*
{
    title: "Automatic Summary Generator",
    description: "Create a powerful resume profile or cover letter in one click. Writer’s block is no longer an obstacle. Try for free!"
  },
  {
    title: "Approved Templates",
    description: "Professionally-designed resume templates and examples. Just edit and download in 5 minutes."
  },

   {
    title: "Cover Letters",
    description: "Our cover letter builder works with the same ease and use of elegant templates as the resume creator."
  }
*/
const features = [
  {
    title: "Easy Online Resume Builder",
    img:"/application.png",
    description: "Create an awesome resume in minutes, without leaving your web browser."
  },
  {
    title: "Automatic Spell-Checker",
    img:"/search.png",
    description: "Our built-in spell-checker takes care of the grammar for you. Create a resume with zero typos or errors."
  },
  {
    title: "Your Data is Safe",
    img:"/data-security.png",
    description: "Your data is kept private and protected by strong 256-bit encryption."
  },
 
  {
    title: "AI Pre-Written Phrases",
    img:"/robot-assistant.png",
    description: "Use the power of AI and data analysis, choose pre-generated effective phrases and keywords."
  },
  {
    title: "Multi-Format Resume Options",
    img:"/word.png",
    description: "Save your perfect resume in any common format, including Microsoft Word and PDF in a single click."
  },
  {
    title: "Cover Letters",
    img:"/note.png",
    description: "Our cover letter builder works with the same ease and use of elegant templates as the resume creator."
  }
];

function Features() {
  return (
    <section className='max-w-screen-xl mx-auto px-10 py-36 '>
      <div className='flex justify-between items-center'>
      <h2 className='text-6xl max-w-[500px] font-ibm  font-bold'>All the features you need.</h2>
      <p className=' max-w-[400px]  mt-4 border-l border-black pl-10 h-fit' >Everything you need to create unlimited social media graphics for every platform.</p>
      </div>
     
     
    
      <div  className="  grid grid-cols-3 gap-10  mt-32 text-center ">
        {features.map((el, i) => (
          <div key={i + "f"} className='p-5 '>
            <Image src={el.img} alt={el.title} width={140} height={200} className='mx-auto opacity-85 block mb-5 '/>
            <h4 className='text-xl font-semibold font-ibm'>{el.title}</h4>
            <p className='leading-[1.6] text-sm max-w-[450px] mx-auto mt-2 text-pretty'>{el.description}</p>
          </div>
        ))}
      </div>
   

    </section>
  )
}

export default Features