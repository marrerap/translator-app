import React, { useState } from 'react'
import rot13 from 'rot-thirteen'

export default function Translator(props) {
    const [text, setText] = useState(props.initialText)

    

    return (
        <div>
            <h1>Translator</h1>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <p>Translated Text: {rot13(text)}</p>
        </div>
    )
}
