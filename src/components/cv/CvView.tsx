"use client"
import { ArrowUpLeft, CircleCheck, CloudDownload, LayoutGrid, Maximize2 } from "lucide-react"
import One from "./templates/one"
import { useEffect, useRef, useState } from "react"
import { Button } from "../ui/button"
import SaveIcon from "../ui/icons/save-icon"
import { ScrollArea } from "../ui/scroll-area"
import { UserButton } from "@clerk/nextjs";
import { Switch } from "../ui/switch";
import Image from "next/image";
import { useCVContext } from "@/lib/CVContext"
import Two from "./templates/two"
import Three from "./templates/three"

type Props = {
    preview: boolean,
    setPreview: (v: boolean) => void
}
const getTemplate = (i:number)=>{
    switch (i) {
        case 3:
            return <Three/>;
        case 2:
            return <Two/>;

        default:
            return <One/>;
    }
}

const CvView = ({ preview, setPreview }: Props) => {
    const {state}= useCVContext()
    const [selcted, setSelcted] = useState<number>(1);
    const [scale, setScale] = useState<number>(1);
    const [height, setHeight] = useState<string>("fit-content");
    const divRef = useRef<HTMLDivElement | null>(null);
    const captureRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (let entry of entries) {
                if (captureRef.current) {
                    const scaleFactor = entry.contentRect.width / captureRef.current.clientWidth;
                    const heightFactor = captureRef.current.scrollHeight * scaleFactor;
                    setHeight(`${heightFactor}px`)
                    setScale(scaleFactor);
                }
            }
        };

        const resizeObserver = new ResizeObserver(handleResize);

        if (divRef.current) {
            resizeObserver.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                resizeObserver.unobserve(divRef?.current);
            }
            resizeObserver.disconnect();
        };
    }, [state]);


    const style: React.CSSProperties = {
        '--w': preview ? '60vw' : '30vw',
        '--h': preview ? 'calc(100vh - 90px)' : 'calc(100vh - 150px)',
    } as React.CSSProperties;
    const templates = [{
        id: 1,
        img: "/templates/1.webp",

    }, {
        id: 2,
        img: "/templates/2.webp",

    }, {
        id: 3,
        img: "/templates/3.webp",

    }, {
        id: 4,
        img: "/templates/4.webp",

    }, {
        id: 5,
        img: "/templates/5.webp",

    }]
    return (
        <>
            <div className={` fixed w-[30%]  bg-white  h-screen transition-transform duration-300 ${preview ? "translate-x-0" : "-translate-x-full"}`}>
                <h2 className="text-xl p-5 h-20 flex items-center capitalize border-b border-gray-400">Select the Best for you </h2>
                <ScrollArea className="h-[calc(100%-5rem)]">
                    <div className='grid grid-cols-2 gap-5 p-5 '>
                        {templates.map((el, i) => (
                            <div key={"template"+i} className="relative cursor-pointer" onClick={()=>setSelcted(i+1)}>
                                <div className={`absolute pointer-events-none top-0 left-0 bg-black/5 w-full h-full grid place-content-center  transition-opacity ${el.id === selcted ? "opacity-100" : "opacity-0"} `}>
                                  <CircleCheck size={35}/>
                                </div>
                                 
                                <Image  src={el.img} alt='template' width={700} height={500} className={`border w-full transition-colors hover:border-gray-900 ${el.id === selcted ? "border-black" : ""}`} />
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>
            <div style={style} className={`bg-gray-200 grid min-h-screen max-h-screen overflow-y-auto fixed z-50 top-0 right-0 w-full transition-[max-width] duration-300 ${preview ? "max-w-[70%] pb-2" : "max-w-[50%]"}`}>

                <div className="flex justify-between items-center h-fit py-5 px-10">
                    <Button onClick={() => setPreview(!preview)} variant={"ghost"} className="flex gap-3 items-center">
                        {preview ? <ArrowUpLeft /> : <LayoutGrid />}
                        <span className="block">
                            {preview ? "Back to editor" : "Select template"}
                        </span>
                    </Button>
                    <div className="flex items-center gap-5">
                        <Button className="flex items-center gap-2"><CloudDownload size={18}/> Download</Button>
                        <UserButton appearance={{ elements: { avatarBox: { width: 40, height: 40, border: "1px solid #222" } } }} />
                    </div>

                </div>
                <ScrollArea ref={divRef} id="dev" onClick={() => setPreview(true)} className={`group overflow-y-auto  m-auto cursor-pointer  bg-white rounded-md  w-[var(--w)] h-[var(--h)] `}>
                    <div style={{ height }} className="overflow-hidden flex justify-center w-[var(--w)]">
                        <div id='capture' style={{ scale }} ref={captureRef} className={`min-w-[1160px]  h-fit origin-top pointer-events-none   bg-white rounded-md`}>
                         {getTemplate(selcted)}
                        </div>
                    </div>
                    {!preview && <button className="absolute center scale-50 opacity-0 transition-[scale_opacity] duration-300 group-hover:opacity-100 group-hover:scale-100 z-10 size-16 bg-sky-400 grid place-content-center rounded-full shadow-sm text-white"><Maximize2 /></button>}
                </ScrollArea>
                {!preview && <div className="flex justify-end items-center h-fit py-3 mt-auto w-[var(--w)] mx-auto">
                    <div className="flex gap-2 items-center">
                        <SaveIcon />
                        saved
                    </div>
                </div>}
            </div>

        </>
    )
}

export default CvView