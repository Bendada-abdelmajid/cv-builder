"use client";

import { useRef } from "react";
import React from 'react';
import MonthPicker from "@/components/ui/month-picker";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format , parse} from "date-fns";
import { PopoverContent } from "@radix-ui/react-popover";
import { Switch } from "@/components/ui/switch";

type Props = {
    startDate: string,
    endDate: string,
    setStartDate: (newDate: string) => void,
    setEndDate: (newDate: string) => void,
}


const DatePicker = ({ startDate, endDate, setStartDate, setEndDate }: Props) => {
    const formatDate = (date: string ): string  => {
        return date ? format(parse(date, 'MMMM yyyy', new Date()), 'MMM, yyyy') : "Pick a date";
    }
    const pickerStart = useRef(null);
    const pickerEnd = useRef<HTMLButtonElement>(null);

    const setPresent = () => {
        if (endDate === "Present") {
            setEndDate(format(new Date(), 'MMMM yyyy'));
        } else {
            setEndDate("Present");
            setTimeout(() => {
                pickerEnd?.current?.click();
            }, 500);
        }
    };

    return (
        <div className='flex  items-center gap-3'>
            <Popover>
                <PopoverTrigger asChild ref={pickerStart}>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[180px] justify-start h-12 text-left font-normal",
                            !startDate && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formatDate(startDate)}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-2 bg-white w-full border m-2 rounded-sm shadow-lg">
                    <MonthPicker currentMonth={startDate} onMonthChange={setStartDate} />
                </PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger asChild ref={pickerEnd}>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[180px] h-12 justify-start text-left font-normal",
                            !endDate && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4 " />
                        {endDate === "Present" ? "Present" : formatDate(endDate)}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-2 z-50 w-full bg-white border m-2 rounded-sm shadow-md">
                    <MonthPicker currentMonth={endDate === "Present" ? undefined : endDate} onMonthChange={setEndDate} />
                    <Button asChild variant={"ghost"} className="mt-3 flex justify-start items-center gap-3 w-full" onClick={setPresent}>
                        <div>
                        <Switch checked={endDate === "Present"} /> <span>Currently work here</span>
                        </div>
                    </Button>
                </PopoverContent>
            </Popover>
        </div>
    );
}

export default DatePicker;





    // const setStartDate = (value: Date) => {
        
    //     setTimeout(() => {
    //         picker?.current?.click()
    //     }, 500);
    // };


    // const setEndDate = (value: Date) => {
    //     setDate({ ...date, end: value });
    //     setTimeout(() => {
    //         picker2?.current?.click()
    //     }, 500);
    // };