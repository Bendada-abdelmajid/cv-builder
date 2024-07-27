
import Header from '@/components/Header'
import Tabs from '@/components/dashboard/Tabs';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { LogOut, MoveRight, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';



type Props = {}


const Dashboard = async (props: Props) => {
    const user = await currentUser()

    return (
        <div className='h-full max-h-screen flex flex-col pb-5'>
            <header className='container flex justify-between items-center h-20'>
                <Link href={"/"} className="font-boldblock tracking-tighter text-3xl font-ibm">QuickCv</Link>
                <nav className='flex justify-end items-center gap-5'>
                    <Switch />


                    <UserButton appearance={{ elements: { avatarBox: { width: 40, height: 40, border: "1px solid #222" } } }} />
                </nav>
            </header>

            <main className='container mt-5 grid grid-cols-3  flex-1 gap-5 px-0'>
                <div className='col-span-2 row-span-3 rounded-[50px] bg-gray-50 max-h-[calc(100vh-100px)] overflow-hidden'>
                    <div className='p-10 flex justify-between  '>
                        <div>
                            <h1 className='text-4xl font-medium'>Hi {user?.firstName}</h1>
                            <p className='leading-[1.6] mt-5 max-w-96'>Create a tailored resume for each job application. Double your chances of getting hired! </p>
                        </div>
                        <Tabs />
                    </div>
                    <ScrollArea className=" h-[calc(100%-195px)]">
                        <div className='grid grid-cols-3 gap-5  px-10 pb-10 '>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => (
                                <div key={el} className='w-full h-[250px] bg-gray-200 rounded'></div>
                            ))}
                        </div>
                    </ScrollArea>

                </div>
                <Link href={"/dashboard/editor/resume/299"} className='rounded-[50px] group py-6 px-8 border relative overflow-hidden'>
                    <h2 className='font-light'>New Resume</h2>
                    <p className='text-2xl mt-3'>Get started quickly with our easy-to-use builder. Highlight your skills and experience to land your dream job.</p>
                    <Button  className='mt-7 hover:gap-5 btn flex gap-2 items-center '>Start Now <MoveRight /></Button>
                    <Image className='absolute -right-11 -bottom-24 -rotate-45 group-hover:scale-110 duration-300  group-hover:-translate-x-7  group-hover:-translate-y-7  transition-transform' width={200} height={300} src={"/work.png"} alt='letter'/>
                </Link>
                <div className='rounded-[50px] py-6 px-8 border relative overflow-hidden group'>
                    <h2 className='font-light'>Craft Your Perfect Cover Letter</h2>
                    <p className='text-2xl mt-3'>Write a compelling cover letter that complements your resume and highlights your qualifications.</p>
                    <Button className='mt-7 hover:gap-5 btn flex gap-2 items-center'>Start Now <MoveRight /></Button>
                    <Image className='absolute -right-11 -bottom-24 -rotate-45 group-hover:scale-110 duration-300  group-hover:-translate-x-7  group-hover:-translate-y-7  transition-transform' width={200} height={300} src={"/letter.png"} alt='letter'/>
                </div>
                <Button className='bg-black rounded-[50px] py-4 px-8 h-fit flex gap-4 items-center text-white'>
                    <LogOut /><span className='text-lg block'>Logout</span>
                </Button>

            </main>
            {/* <div className='fixed bottom-0 left-0 px-10 w-full flex justify-between items-center h-16'>
                <div className='flex p-1 bg-gray-100 rounded-md w-fit relative'>
                    <span style={{ transform: `translateX(${100 * active}%)` }} className='block transition-transform absolute bg-white top-1 left-1  w-40 h-10 rounded ' />
                    <button onClick={() => setActive(0)} className='font-medium w-40 h-10 relative'>Resumes</button>
                    <button onClick={() => setActive(1)} className='font-medium w-40 h-10 relative'>Cover Letters</button>
                </div>
                <Button ><Plus className="mr-2 h-4 w-4" />Create New</Button>
            </div> */}
        </div>
    )
}

export default Dashboard