import { Input } from '@/components/ui/input'
import { useCVContext } from '@/lib/CVContext'


import React from 'react'
import TailwindEditor from '@/components/editor'
import { Label } from '@/components/ui/label'
import Title from '../ui/Title'
import ImageUploader from '@/components/ImageUploder'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import DeleteBtn from '../ui/DeleteBtn'
import { LinkItem } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'


const inputs = [
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
        label: "country",
        type: "text",
    },

]
type Props = {
    index: number,
    el: LinkItem
}
const Item = ({ el, index }: Props) => {
    const { dispatch } = useCVContext()
    const deleteItem = () => {
        dispatch({ type: "DELETE_LINK", index })
    }
    return (



        <AccordionItem key={"link" + index} className=" border relative group" value={"link-" + index}>
            <AccordionTrigger className="hover:no-underline text-left px-5 text-xs">
                {!el.label ?
                    (<span> (Not specified)</span>) :
                    (<div>
                        <h4>{el.label}</h4>
                        <p className='text-gray-400 mt-1'>{el.url}</p>
                    </div>)}
            </AccordionTrigger>

            <AccordionContent className='grid px-5 grid-cols-2 gap-5 mt-3'>
                <div >
                    <Label>Label</Label>
                    <Input
                        value={el.label}
                        onChange={(e) => dispatch({ type: "UPDATE_LINK", field: "label", index, value: e.target.value })}
                    />
                </div>
                <div >
                    <Label>Link</Label>
                    <Input
                        value={el.url}
                        onChange={(e) => dispatch({ type: "UPDATE_LINK", field: "url", index, value: e.target.value })}
                    />
                </div>

            </AccordionContent>
            <DeleteBtn onDelete={deleteItem} />
        </AccordionItem>


    )
}
const PersonalDetails = () => {
    const { state, dispatch } = useCVContext();
    const { personalDetails, links } = state
    const handlePersonalDetailsChange = (field: String, value: string) => {
        dispatch({ type: 'UPDATE_PERSONAL_DETAILS', field, value });
    };
    const setSummary = (value: String) => {
        dispatch({ type: 'UPDATE_PERSONAL_DETAILS', field: "summary", value });
    }
    const setName = (value: String) => {
        dispatch({ type: 'UPDATE_NAME', field: "personalDetails", value });

    }
    //UPDATE_NAME
    return (
        <section className='py-10'>
            <Title className='text-2xl font-semibold' value={personalDetails.name} setValue={setName} />

            <div className='grid grid-cols-2 gap-5 my-5'>
                <ImageUploader />
                {inputs.map((input, i) => (
                    <div key={input.label} style={{ order: i }}>
                        <Label>{input.label}</Label>
                        <Input
                            type={input.type}
                            value={personalDetails[input.label as keyof typeof personalDetails]}
                            onChange={(e) => handlePersonalDetailsChange(input.label, e.target.value)}
                        />
                    </div>
                ))}
            </div>

            <Label className='mb-2'>Professional Summary</Label>
            <TailwindEditor className={"min-h-48  focus:ring-2 px-3 py-2 w-full bg-slate-50"} initialValue={personalDetails.summary} onChange={setSummary} />
            <h3 className='mt-5'>Websites & Social Links</h3>
            <Accordion type="single" className="w-full space-y-3 mt-3" collapsible defaultValue="link-0" >
                {links && links.map((el, index) => {
                    return (
                        <Item key={"link" + index} el={el} index={index} />
                    )
                })}
            </Accordion>
            <Button onClick={() => dispatch({ type: 'ADD_LINK' })} variant={"ghost"} className="mt-5 flex gap-2 items-center ">
                <Plus />
                <span>Add one more Link</span>
            </Button>
        </section>
    )
}

export default PersonalDetails
// { "title": "", "personalDetails": { "name": "Details", "job title": "web developer", "full name": "abdelmajid bendada", "email": "abdelmajid.bendada@gmail.com", "phone": "0687433939", "linkedIn": "", "country": "Morocco", "postal code": "", "summary": " < p > <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.when an unknown printer took a galley of type and scrambled it to make a type specimen book.</><p></p><p></p><p></p><p></p>" }, "experience": { "name": "Career Experience", "list": [{ "job title": "full stack developer", "employer": "facebook", "startdate": "January 2023", "enddate": "Present", "city": "casablanca", "description": "<ul class=\"list-disc list-outside  tight\" data-tight=\"true\"><li class=\"tiptap-list \"><p>There are many variations of passages of Lorem Ipsum available</p></li><li class=\"tiptap-list \"><p>There are many variations of passages of Lorem Ipsum available</p></li><li class=\"tiptap-list \"><p>There are many variations of passages of Lorem Ipsum available</p></li><li class=\"tiptap-list \"><p>There are many variations of passages of Lorem Ipsum available</p></li></ul>" }, { "job title": "junior developer", "employer": "kwaki", "startdate": "January 2021", "enddate": "December 2022", "city": "asfi", "description": "<ul class=\"list-disc list-outside  tight\" data-tight=\"true\"><li class=\"tiptap-list \"><p>There are many variations of passages of Lorem Ipsum </p></li><li class=\"tiptap-list \"><p>There are many variations of passages of Lorem Ipsum available, bu</p></li><li class=\"tiptap-list \"><p>There are many variations of passages of Lorem Ipsum available</p></li><li class=\"tiptap-list \"><p>There are many variations of passages of Lorem Ipsum available</p></li></ul>" }] }, "education": { "name": "Education", "list": [{ "school": "University of California", "degree": "Bachelor of Computer Science", "startdate": "November 2016", "enddate": "July 2020", "city": "Berkeley, CA" }] }, "skills": { "name": "Skills", "list": [{ "level": "advanced", "skill": "JavaScript" }, { "level": "advanced", "skill": "React" }, { "level": "advanced", "skill": "MongoDB" }, { "level": "expert", "skill": "HTML & CSS" }, { "level": "intermediate", "skill": "Git" }, { "level": "advanced", "skill": "Node.js" }] }, "languages": { "name": "Languages", "list": [{ "language": "English", "level": "proficient" }, { "language": "French", "level": "proficient" }, { "language": "Arabic", "level": "native" }] }, "profileImage": { "url": "https://ucarecdn.com/3bb5c086-23fa-44e2-b645-1bd052f32aec/-/crop/3840x4949/0,811/-/preview//200x200/", "uuid": "3bb5c086-23fa-44e2-b645-1bd052f32aec" } } 
