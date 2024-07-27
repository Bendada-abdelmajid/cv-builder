"use client";
import TailwindEditor from "@/components/editor";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCVContext } from "@/lib/CVContext";
import { ExperienceItem } from "@/lib/types";
import { Plus } from "lucide-react";
import DatePicker from "../ui/DatePicker";
import { format, parse } from "date-fns";
import DeleteBtn from "../ui/DeleteBtn";
import Title from "../ui/Title";

const inputs = [
    {
        label: "job title",
        type: "text",
    },
    {
        label: "employer",
        type: "text",
    },
    {
        label: "city",
        type: "text",
    }
]
type item = {
    el: ExperienceItem,
    index: number
}
const Item = ({ el, index }: item) => {
    const { dispatch } = useCVContext()
    const handleExperienceChange = (field: string, value: string) => {
        dispatch({ type: 'UPDATE_EXPERIENCE', index, field, value });
    };

    const setDescription = (value: String) => {
        dispatch({ type: 'UPDATE_EXPERIENCE', field: "description", index, value });
    };
    const setStartDate = (value: string) => {
        dispatch({ type: 'UPDATE_EXPERIENCE', field: "startdate", index, value });
    };
    const setEndDate = (value: string) => {
        dispatch({ type: 'UPDATE_EXPERIENCE', field: "enddate", index, value });
    };
    const formatDate = (date: string): string => {
        return date ? format(parse(date, 'MMMM yyyy', new Date()), 'MMM, yyyy') : "";
    }
    const deleteItem=()=>{
        dispatch({ type: "DELETE_EXPERIENCE", index })
    }
    //(Not specified)
    return (
        <AccordionItem key={"experience" + index} className="relative border group" value={"item-" + index}>
            <AccordionTrigger className="hover:no-underline px-5 ">
                {!el["job title"] ?
                    <span> (Not specified)</span>
                    : <div className="text-left"><h4>{el["job title"]}</h4>
                        <p className="text-sm font-extralight text-gray-500">
                            {formatDate(el.startdate)}
                            {el.startdate && el.enddate && <span> - </span>}
                            {el.enddate === "Present" ? "Present" : formatDate(el.enddate)}
                        </p>
                    </div>}

            </AccordionTrigger>

            <AccordionContent className='grid grid-cols-2 gap-5 mt-5 px-5'>
                {inputs.map((input) => (
                    <div key={input.label + index}>
                        <Label>{input.label}</Label>
                        <Input
                            type={input.type}
                            value={el[input.label as keyof typeof el]}
                            onChange={(e) => handleExperienceChange(input.label, e.target.value)}
                        />
                    </div>
                ))}
                <div className="relative z-40">
                    <Label>Start & End Date</Label>
                    <DatePicker startDate={el.startdate} endDate={el.enddate} setEndDate={setEndDate} setStartDate={setStartDate} />
                </div>
                <div className="col-span-2">
                    <Label className="mb-3">Description</Label>
                 
                    <TailwindEditor className={"min-h-40  focus:ring-2 w-full px-3 py-2"} initialValue={el.description} onChange={setDescription} />
                
               
                </div>

                {/* <p dangerouslySetInnerHTML={{__html:el.description}}></p> */}
            </AccordionContent>
            <DeleteBtn onDelete={deleteItem} />
        </AccordionItem>
    )
}
const Experience = () => {
    const { state, dispatch } = useCVContext();
    const { experience } = state
    const setName = (value: String) => {
        dispatch({ type: 'UPDATE_NAME', field: "experience", value });

    }
    return (
        <section className=' py-10'>
         
            <Title className='text-2xl font-semibold' value={experience.name} setValue={setName} />
            <p className='text-sm max-w-[90%] mt-3 mb-10'>Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).</p>
            <Accordion type="single" className="w-full space-y-3" collapsible defaultValue="item-0">
                {experience.list.map((el, i) => {
                    return (
                        <Item key={"experience" + i} el={el} index={i} />
                    )
                })}
            </Accordion>
            <Button onClick={() => dispatch({ type: 'ADD_EXPERIENCE' })} variant={"ghost"} className="mt-5 flex gap-2 items-center ">
                <Plus />
                <span>Add one more employment</span>
            </Button>
        </section>
    )
}
export default Experience;