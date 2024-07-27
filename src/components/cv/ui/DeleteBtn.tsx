import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import React from 'react'

type Props = {

    onDelete:()=>void
}

const DeleteBtn = ({onDelete}: Props) => {
  return (
    <Button onClick={onDelete} className="absolute top-3 z-10 left-full translate-x-2 size-8 transition-opacity opacity-0 group-hover:opacity-100" title="delete" size={"icon"} variant={"ghost"} ><Trash size={18} /></Button>
  )
}

export default DeleteBtn