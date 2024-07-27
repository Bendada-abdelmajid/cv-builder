"use client";
import React, { useState } from 'react';

const Tabs = () => {
    const [active, setActive] = useState<number>(0);

    return (
        <div className='flex p-1 bg-white rounded-md w-fit relative h-fit *:h-10  *:w-32'>
            <span style={{ transform: `translateX(${100 * active}%)` }} className='block transition-transform absolute bg-black top-1 left-1 rounded' />
            <button onClick={() => setActive(0)} className={`font-medium relative transition-colors ${active === 0 ? "text-white" : ""}`}>Resumes</button>
            <button onClick={() => setActive(1)} className={`font-medium relative transition-colors ${active === 1 ? "text-white" : ""}`}>Cover Letters</button>
        </div>
    );
}

export default Tabs;
