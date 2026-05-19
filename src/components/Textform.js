import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        // let newText = text.toUpperCase();
        // setText(newText)
        setText("You have clicked on handleupclick");
    }

    const handleOnChange = (event)=>{
        console.log("Onchange is working");
        setText(event.target.value)
    }

    const [Text, setText] = useState('Enter text here');
    return (
        <div>
            <h1>{props.title}</h1>
            <div class="mb-3">
                <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
