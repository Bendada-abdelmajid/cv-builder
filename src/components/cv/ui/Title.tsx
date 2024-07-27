import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Pencil } from 'lucide-react'
import React, { useState } from 'react'

type Props = {
    className?: string,
    value: string,
    setValue: (value: string) => void,
}

const Title = ({ className, value, setValue }: Props) => {
    const [edit, setEdit] = useState(false)
    return (
        <div className={cn(className, "relative w-fit group")}>
            <div className={`${edit ? "bg-gray-200 border-b-2 border-b-black" : ""} relative min-w-20 py-1 cursor-pointer `} >
                <div className={edit ? "opacity-0 invisible" : ""}>
                    {value ? value : "Untitled"}
                </div>
                <input placeholder="Untitled" type="text" className={`absolute bg-transparent border-none focus-visible:outline-none inset-0 ${!edit ? " opacity-0 invisible" : ""}`} value={value} autoFocus={edit} onBlur={() => setEdit(false)} onChange={(e) => setValue(e.target.value)} />
            </div>
            <Button title='rename' className='absolute text-inherit size-7 p-0 top-1/2 -translate-y-1/2 left-full translate-x-2 opacity-0 transition-opacity group-hover:opacity-100 ' size={"icon"} variant={"ghost"} onClick={() => setEdit(true)}><Pencil size={16} /></Button>
        </div>
    )
}

export default Title