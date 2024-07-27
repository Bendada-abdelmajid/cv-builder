"use client";
import CvView from "@/components/cv/CvView";
import Editore from "@/components/cv/Editore";
import { CVProvider } from "@/lib/CVContext";

import React, { useState } from "react";

type Props = {};

function Page({ }: Props) {
    const [preview, setPreview] = useState(false)
    return (
        <CVProvider>
            <main className={`grid grid-cols-2 max-h-screen ${preview ? "overflow-y-hidden" : ""}`}>
                <Editore />
                <CvView preview={preview} setPreview={setPreview} />
            </main>
        </CVProvider>
    );
}

export default Page;
