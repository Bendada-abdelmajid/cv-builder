import { Button } from "@/components/ui/button";
import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (<main className="relative grid grid-cols-5 h-screen  ">
     <div className="col-span-3 w-full flex flex-col h-screen relative pt-5 px-10 bg-[#eef2ed]">
         <Link href={"/"} className="block font-bold tracking-tighter text-2xl font-ibm">QuickCv</Link>
         <Image src={"/sing-up.png"} width={900} height={1200} alt="login" className="m-auto h-[80%] object-contain" />
     </div>
     <div className="h-full w-full  col-span-2 mx-auto  py-5 flex flex-col  ">
         <Link href={"/sign-in"} className="w-fit ml-auto mr-5">
             <Button variant={"ghost"} >Loge In</Button>
         </Link>
        <div className="m-auto sign"> <SignUp /></div>
     </div>


 </main>);
}