import React, {useState} from "react";
import { createEditor, BaseEditor, Descendant } from "slate";

import {Slate, Editable, withReact, ReactEditor} from 'slate-react'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const initialValue: CustomElement[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  }
]

const Editor = () => {
    
    const [value, setValue] = useState<Descendant[]>(initialValue)
    const [editor] = useState(() => withReact(createEditor()))

    return (
      <Slate editor={editor} value={value} onChange={(newValue) => {setValue(newValue)}}>
        <Editable />
      </Slate>
    )
}

export default Editor;