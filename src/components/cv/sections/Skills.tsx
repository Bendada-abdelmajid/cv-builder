import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCVContext } from '@/lib/CVContext'

import { Plus } from 'lucide-react'
import React from 'react'
import LevelBar from '../ui/LevelBar'
import { SkillItem } from '@/lib/types'
import DeleteBtn from "../ui/DeleteBtn";
import Title from "../ui/Title";

type Props = {
    el: SkillItem,
    index: number
}
const levels = ["basic", "beginner", "intermediate", "advanced", "expert"];

const Item = ({ el, index }: Props) => {
    const { dispatch } = useCVContext()
    const setLevel = (i: number) => {


        dispatch({ type: "UPDATE_SKILL", field: "level", index, value: levels[i] })
    }
    const deleteItem=()=>{
        dispatch({ type: "DELETE_SKILL", index })
    }
    return (
    
            <AccordionItem key={"skille" + index} className=" relative border group" value={"skill-" + index}>
                <AccordionTrigger className="hover:no-underline text-left px-5">
                    {!el.skill ?
                        (<span> (Not specified)</span>) :
                        (<div>
                            <h4>{el.skill}</h4>
                            <span className="block capitalize text-sm font-extralight text-gray-500" >{el.level} </span>
                        </div>)}
                </AccordionTrigger>

                <AccordionContent className='grid px-5 grid-cols-2 gap-5 mt-5'>
                    <div >
                        <Label>Skill</Label>
                        <Input
                            value={el.skill}
                            onChange={(e) => dispatch({ type: "UPDATE_SKILL", field: "skill", index, value: e.target.value })}
                        />
                    </div>
                    <LevelBar levels={levels} level={el.level} setLevel={setLevel} />
                </AccordionContent>
                <DeleteBtn onDelete={deleteItem} />
            </AccordionItem>

    )
}
const Skills = () => {
    const { state, dispatch } = useCVContext()
    const { skills } = state

    const setName = (value: String) => {
        dispatch({ type: 'UPDATE_NAME', field: "skills", value });

    }
    return (
        <section className=' py-10'>
         
            <Title className='text-2xl font-semibold' value={skills.name} setValue={setName} />
            <p className='max-w-[95%] mt-3 mb-10'>
                Select 5 key skills that match the job listing, especially if applying online.
            </p>

            <Accordion type="single" className="w-full space-y-3" collapsible defaultValue="skill-0" >
                {skills.list.map((el, index) => {
                    return (
                        <Item key={"skille" + index} el={el} index={index} />
                    )
                })}
            </Accordion>
            <Button onClick={() => dispatch({ type: 'ADD_SKILL' })} variant={"ghost"} className="mt-5 flex gap-2 items-center ">
                <Plus />
                <span>Add one more Skill</span>
            </Button>

        </section>

    )
}

export default Skills