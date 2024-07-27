import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCVContext } from "@/lib/CVContext";
import { EducationItem } from "@/lib/types";
import { Plus } from "lucide-react";
import DatePicker from "../ui/DatePicker";
import { format, parse } from "date-fns";
import DeleteBtn from "../ui/DeleteBtn";
import Title from "../ui/Title";
const inputs = [
    {
        label: "school",
        type: "text",
    },
    {
        label: "degree",
        type: "text",
    },

    {
        label: "city",
        type: "text",
    },
]
type item = {
    el: EducationItem,
    index: number
}
const Item = ({ el, index }: item) => {
    const { dispatch } = useCVContext()
    const handleExperienceChange = (field: string, value: string) => {
        dispatch({ type: 'UPDATE_EDUCATION', index, field, value });
    };

    const setStartDate = (value: string) => {
        dispatch({ type: 'UPDATE_EDUCATION', field: "startdate", index, value });
    };
    const setEndDate = (value: string) => {
        dispatch({ type: 'UPDATE_EDUCATION', field: "enddate", index, value });
    };
    const formatDate = (date: string): string => {
        return date ? format(parse(date, 'MMMM yyyy', new Date()), 'MMM, yyyy') : "";
    }
    const deleteItem = () => {
        dispatch({ type: "DELETE_EDUCATION", index })
    }
    //(Not specified)
    return (
        <AccordionItem key={"experience" + index} className="border relative group" value={"item-" + index}>
            <AccordionTrigger className="hover:no-underline px-5">
                {!el.degree ?
                    <span> (Not specified)</span>
                    : <div className="text-left">

                        <h4>{el.degree}  {el.degree && el.school && <span> at </span>} {el.school} </h4>
                        <p className="text-sm font-extralight text-gray-500">
                            {formatDate(el.startdate)}
                            {el.startdate && el.enddate && <span> - </span>}
                            {el.enddate === "Present" ? "Present" : formatDate(el.enddate)}
                        </p>
                    </div>}

            </AccordionTrigger>

            <AccordionContent className='grid px-5 grid-cols-2 gap-5 mt-5'>
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
            </AccordionContent>
            <DeleteBtn onDelete={deleteItem} />
        </AccordionItem>
    )
}
const Eeducation = () => {
    const { state, dispatch } = useCVContext();
    const { education } = state
    const setName = (value: String) => {
        dispatch({ type: 'UPDATE_NAME', field: "education", value });

    }
    return (
        <section className=' py-10'>

            <Title className='text-2xl font-semibold' value={education.name} setValue={setName} />
            <p className='max-w-[80%] mt-3 mb-10'>
                A varied education on your resume sums up the value that your learnings and background will bring to job.
            </p>

            <Accordion type="single" className="w-full space-y-3" collapsible defaultValue="item-0">
                {education.list.map((el, i) => {
                    return (
                        <Item key={"education" + i} el={el} index={i} />
                    )
                })}
            </Accordion>
            <Button onClick={() => dispatch({ type: 'ADD_EDUCATION' })} variant={"ghost"} className="mt-5 flex gap-2 items-center ">
                <Plus />
                <span>Add one more employment</span>
            </Button>

        </section>
    )
}
export default Eeducation;