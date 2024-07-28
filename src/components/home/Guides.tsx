import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {}
const steps=[{
  title:"Sing Up",
  sub:" Your First Steps",
  desc:"We’ve made sure that signing up to our resume maker tools is even more convenient than usual. Use one of the most common networks used by professionals (LinkedIn, Facebook or your Google account) or simply skip this step and enter your name and email address. We keep your data strictly confidential."
},{
  title:"Create",
  sub:" Achieve Beauty With Ease",
  desc:"Choose one of our beautiful, professionally designed resume or cover letter formats. Add your personal info and choose and edit the necessary sections. Customize the layout and visuals as much (or as little) as you want. We provide a ton of ready content with lots of room for your own creativity and needs."
},{
  title:"Download",
  sub:" Now It’s Yours!",
  desc:"Export your new resume, CV or application letter in one of the available formats. PDF will provide you with the best and most consistent visual formatting. Word files allow you to edit the document further or submit the resume to an online application system. You can also share your career updates online."
}]
function Guides({}: Props) {
  return (
    <section className='border-t  py-36'>
      <div className='max-w-screen-xl  px-10  mx-auto'>
        <h2 className='text-6xl max-w-[500px] font-ibm  font-bold'>How its work.</h2>
        <div className="grid grid-cols-3 gap-5 mt-20">
          {steps.map((el, i)=>(
            <Card key={i+"step"} className="relative" style={{marginTop:`${i*60}px`}} >
              <span className='absolute -top-5 -right-5 bg-primary size-14 text-white rounded-full grid place-content-center'> {i+1}</span>
              <CardHeader>
                  <CardTitle className='font-ibm'>{el.title}</CardTitle>
                  <CardDescription>{el.sub}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className=''>{el.desc}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Guides