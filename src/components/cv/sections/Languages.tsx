import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCVContext } from '@/lib/CVContext'

import { Plus, Trash } from 'lucide-react'
import React from 'react'
import LevelBar from '../ui/LevelBar'
import { LanguageItem } from '@/lib/types'
import DeleteBtn from "../ui/DeleteBtn";
import Title from "../ui/Title";

type Props = {
    el: LanguageItem,
    index: number
}

const levels = ["basic", "intermediate", "proficient", "fluent", "native"]

const Item = ({ el, index }: Props) => {
    //DELETE_LANGUAGE
    const { dispatch } = useCVContext()
    const setLevel = (i: number) => {


        dispatch({ type: "UPDATE_LANGUAGE", field: "level", index, value: levels[i] })
    }
    const deleteItem=()=>{
        dispatch({ type: "DELETE_LANGUAGE", index })
    }
    return (
   


            <AccordionItem key={"language" + index} className=" border relative group" value={"language-" + index}>
                <AccordionTrigger className="hover:no-underline text-left px-5">
                    {!el.language ?
                        (<span> (Not specified)</span>) :
                        (<div>
                            <h4>{el.language}</h4>
                            <span className="block capitalize text-sm font-extralight text-gray-500" >{el.level} </span>
                        </div>)}
                </AccordionTrigger>

                <AccordionContent className='grid px-5 grid-cols-2 gap-5 mt-5'>
                    <div >
                        <Label>Skill</Label>
                        <Input
                            value={el.language}
                            onChange={(e) => dispatch({ type: "UPDATE_LANGUAGE", field: "language", index, value: e.target.value })}
                        />
                    </div>
                    <LevelBar levels={levels} level={el.level} setLevel={setLevel} />
                </AccordionContent>
                <DeleteBtn onDelete={deleteItem} />
            </AccordionItem>
           
 
    )
}
const Languages = () => {
    const { state, dispatch } = useCVContext()
    const { languages } = state
    const setName = (value: String) => {
        dispatch({ type: 'UPDATE_NAME', field: "languages", value });

    }
    return (
        <section className=' py-10'>
         
            <Title className='text-2xl font-semibold' value={languages.name} setValue={setName} />
            <p className='max-w-[95%] mt-3 mb-10'>
                Select 5 key skills that match the job listing, especially if applying online.
            </p>

            <Accordion type="single" className="w-full space-y-3" collapsible defaultValue="language-0" >
                {languages.list.map((el, index) => {
                    return (
                        <Item key={"language" + index} el={el} index={index} />
                    )
                })}
            </Accordion>
            <Button onClick={() => dispatch({ type: 'ADD_LANGUAGE' })} variant={"ghost"} className="mt-5 flex gap-2 items-center ">
                <Plus />
                <span>Add one more Language</span>
            </Button>

        </section>
    )
}

export default Languages