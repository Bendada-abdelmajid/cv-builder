import { EditorBubble, useEditor } from "novel";
import { removeAIHighlight } from "novel/extensions";
import { Fragment, type ReactNode, useEffect } from "react";

import {} from "novel/plugins";

import { AISelector } from "./ai-selector";
import { Button } from "@/components/ui/button";
import Magic from "@/components/ui/icons/magic";

interface GenerativeMenuSwitchProps {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const GenerativeMenuSwitch = ({ children, open, onOpenChange }: GenerativeMenuSwitchProps) => {
  const { editor } = useEditor();

  useEffect(() => {
    if(editor){
      if (!open) removeAIHighlight(editor);
    }
  }, [open, editor]);
  return (
    <EditorBubble
      tippyOptions={{
        
        placement: open ? "bottom-start" : "top",
        onHidden: () => {
          onOpenChange(false);
          editor?.chain().unsetHighlight().run();
        },
      }}
      className="flex w-fit max-w-[90vw] overflow-hidden rounded-md border border-muted bg-background shadow-xl"
    >
      {open && <AISelector open={open} onOpenChange={onOpenChange} />}
      {!open && (
        <Fragment>
          <Button
            className="gap-1 rounded-none text-purple-500"
            variant="ghost"
            onClick={() => onOpenChange(true)}
            size="sm"
          >
            <Magic className="h-5 w-5" />
            Ask AI
          </Button>
          {children}
        </Fragment>
      )}
    </EditorBubble>
  );
};

export default GenerativeMenuSwitch;