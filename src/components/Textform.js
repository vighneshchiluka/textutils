import React, { useState } from 'react'

export default function Textform(props) {

      // -----------Convert to Uppercase---------
      
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" +  text);
        // setText("You have clicked on handleUpClick")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    // -----------Convert to Lowercase---------

    const handleLowClick = ()=>{
        // console.log("Uppercase was Clicked" +  text);
        // setText("You have clicked on handleUpClick")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    // -----------Clear Text---------

    const handleClearClick = ()=>{
        // console.log("Uppercase was Clicked" +  text);
        // setText("You have clicked on handleUpClick")
        let newText = "";
        setText(newText);
        props.showAlert("Cleared text!", "success");
    }

    // -----------Copy Text---------

    const handleCopy = ()=>{
      var text = document.getElementById("MyBox");
      text.select();
      navigator.clipboard.writeText(text.value)
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to Clipboard!", "success");
    }

    // -----------Remove Extra Spaces---------

    const handleExtraSpaces = ()=>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
     props.showAlert("Removed Extra Spaces!", "success");
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    };

    const[text,setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==="dark" ? "white " : "#042743"}}>
      <div className="mb-3 mt-5">
        <h2 className='mb-2'>{props.heading}</h2>
    <textarea className="form-control" value={text}  onChange={handleOnChange} id="MyBox" rows="12"  style={{backgroundColor: props.mode==="dark" ? "#13466e " : "white", color:props.mode==="dark" ? "white " : "#042743"}}></textarea>
    <button disabled={text.length === 0} className='btn btn-primary mx-1 mt-3' onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length === 0} className='btn btn-primary mx-1 mt-3' onClick={handleLowClick}>Convert to Lowercase</button>
    <button disabled={text.length === 0} className='btn btn-primary mx-1 mt-3' onClick={handleClearClick}>Clear the Text</button>
    <button disabled={text.length === 0} className='btn btn-primary mx-1 mt-3' onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length === 0} className='btn btn-primary mx-1 mt-3' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    </div>

    <div className="container" style={{color: props.mode==="dark" ? "white " : "#042743"}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
