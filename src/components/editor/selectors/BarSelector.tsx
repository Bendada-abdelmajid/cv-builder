import React,{type ReactNode} from 'react'


import {} from "novel/plugins";


type Props = {
    children: ReactNode;

}

const BarSelector = ({ children}: Props) => {
  return (
    <div className=' w-full flex justify-start items-center'>
        
          {children}
     
       
    </div>
  )
}

export default BarSelector