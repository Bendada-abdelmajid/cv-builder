import React from 'react'

type Props = {
    className?:string
}

const SaveIcon = ({className}: Props) => {
    return (
        <svg width="24" className={className} height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M6 18.98A5.5 5.5 0 016.5 8a6.5 6.5 0 0112.48 2.03 4.5 4.5 0 01.02 8.94V19H6v-.02z" fill="#0F141F" opacity=".24" /><path stroke="#FFF" strokeWidth="2" strokeLinejoin="round" d="M9 11.5l2.5 2.5 3.5-4" /></g></svg>
    )
}

export default SaveIcon