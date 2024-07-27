"use client";

import { EditorContent, EditorRoot, } from "novel";
import { handleCommandNavigation } from "novel/extensions";
import { useState } from "react";
import { defaultExtensions } from "./extensions";
import { TextButtons } from "./selectors/TextButtons";
import { NodeSelector } from "./selectors/node-selector";

import { LinkSelector } from "./selectors/link-selector";
import { ColorSelector } from "./selectors/color-selector";
import GenerativeMenuSwitch from "./generative/generative-menu-switch";
import { cn } from "@/lib/utils";
import { generateJSON } from "@tiptap/html"
import BarSelector from "./selectors/BarSelector";
import { Separator } from "../ui/separator";
interface EditorProp {
    initialValue: string;
    onChange: (value: String) => void;
    className: String
}

const TailwindEditor = ({ initialValue, onChange, className }: EditorProp) => {


    const text = generateJSON(initialValue, [...defaultExtensions])


    const [openNode, setOpenNode] = useState(false);
    const [openAI, setOpenAI] = useState(false);
    const [openColor, setOpenColor] = useState(false);
    const [openLink, setOpenLink] = useState(false);


    const extensions = [...defaultExtensions];

    return (
  
        <EditorRoot  >
     


            <EditorContent
            className="flex flex-col-reverse bg-slate-50 border"
                extensions={extensions}
                initialContent={text}
                editorProps={{
                    handleDOMEvents: {
                        keydown: (_view, event) => handleCommandNavigation(event),

                    },

                    attributes: {

                        class: cn(className, `editor border cursor-text prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`),
                    },
                }}
                onUpdate={({ editor }) => {
                    onChange(editor.getHTML());
                }}
            >
                <BarSelector >
                <Separator orientation="vertical" />
                    <NodeSelector open={openNode} onOpenChange={setOpenNode} />
                    <Separator orientation="vertical" />
                    <LinkSelector open={openLink} onOpenChange={setOpenLink} />
                    <Separator orientation="vertical" />
                    <TextButtons />
                    <Separator orientation="vertical" />
                    <ColorSelector open={openColor} onOpenChange={setOpenColor} />
                </BarSelector>
                <GenerativeMenuSwitch open={openAI} onOpenChange={setOpenAI}>
                    <Separator orientation="vertical" />
                    <NodeSelector open={openNode} onOpenChange={setOpenNode} />
                    <Separator orientation="vertical" />

                    <LinkSelector open={openLink} onOpenChange={setOpenLink} />
                    <Separator orientation="vertical" />
                    <TextButtons />
                    <Separator orientation="vertical" />
                    <ColorSelector open={openColor} onOpenChange={setOpenColor} />
                </GenerativeMenuSwitch>
            </EditorContent>
      
        </EditorRoot>
      
    );
};
export default TailwindEditor;
