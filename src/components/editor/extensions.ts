import {
  AIHighlight,
  CharacterCount,
  GlobalDragHandle,
  HorizontalRule,
  Placeholder,
  StarterKit,
  TaskItem,
  TaskList,
  TiptapLink,
  Twitter,
  Youtube,
} from "novel/extensions";


import { cx } from "class-variance-authority";


//TODO I am using cx here to get tailwind autocomplete working, idk if someone else can write a regex to just capture the class key in objects
const aiHighlight = AIHighlight;
//You can overwrite the placeholder with your own configuration
const placeholder = Placeholder;
const tiptapLink = TiptapLink.configure({
  HTMLAttributes: {
    class: cx(
      "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
    ),
  },
});





const taskList = TaskList.configure({
  HTMLAttributes: {
    class: cx("not-prose pl-2 "),
  },
});
const taskItem = TaskItem.configure({
  HTMLAttributes: {
    class: cx("flex gap-2 items-start my-4"),
  },
  nested: true,
});

const horizontalRule = HorizontalRule.configure({
  HTMLAttributes: {
    class: cx("mt-4 mb-6 border-t border-muted-foreground"),
  },
});

const starterKit = StarterKit.configure({
  bulletList: {
    HTMLAttributes: {
      class: cx("list-disc list-outside "),
    },
  },
  orderedList: {
    HTMLAttributes: {
      class: cx("list-decimal  tiptap-list "),
    },
  },
  listItem: {
    HTMLAttributes: {
      class: cx("tiptap-list "),
    },
    
  },
  blockquote: {
    HTMLAttributes: {
      class: cx("border-l-4 border-primary"),
    },
  },
  codeBlock: {
    HTMLAttributes: {
      class: cx("rounded-md bg-muted text-muted-foreground border p-5 font-mono font-medium"),
    },
  },
  code: {
    HTMLAttributes: {
      class: cx("rounded-md bg-muted  px-1.5 py-1 font-mono font-medium"),
      spellcheck: "false",
    },
  },
  horizontalRule: false,
  dropcursor: {
    color: "#DBEAFE",
    width: 4,
  },
  gapcursor: false,
});



const youtube = Youtube.configure({
  HTMLAttributes: {
    class: cx("rounded-lg border border-muted"),
  },
  inline: false,
});

const twitter = Twitter.configure({
  HTMLAttributes: {
    class: cx("not-prose"),
  },
  inline: false,
});

const characterCount = CharacterCount.configure();

export const defaultExtensions = [
  starterKit,
  placeholder,
  tiptapLink,

  taskList,
  taskItem,
  horizontalRule,
  aiHighlight,
  youtube,
  twitter,
  characterCount,
  GlobalDragHandle,
];