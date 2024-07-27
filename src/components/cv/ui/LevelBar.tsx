import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import React, { Fragment } from 'react'


type Props = {
    setLevel:(value:number)=>void,
    levels:string[],
    level: string

}

const LevelBar = ({ levels, level, setLevel }: Props) => {
    
    const lefts = ["0%", "20%", "40%", "60%", "80%"]
     
    return (
        <div>
            <Label>Level </Label>

            <div className='bg-slate-50 p-[2px] w-full border overflow-hidden rounded h-12 '>
            <div className='w-full flex items-center relative h-full   gap-1'>
                <span style={{ left: lefts[levels.indexOf(level)] }} className='block absolute top-[1px] h-10  rounded w-1/5 bg-black/85 transition-[left] duration-300' />
                {[0,1, 2, 3, 4].map(el => (
                    <Fragment key={el}>
                        <span className='flex-1 h-10 rounded transition-colors hover:bg-gray-200 block cursor-pointer ' onClick={()=>setLevel(el)}/>
                        {el < 4 && <Separator orientation='vertical' className='h-5 my-auto' />}
                    </Fragment>
                ))}
            </div>
            </div>
        </div>
    )
}

export default LevelBar