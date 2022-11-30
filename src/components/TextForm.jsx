import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {

    const [text,setText] = useState("")
    const handleUpChange=()=>{
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to upper case","success")        
    }
    
    const handleLoChange=()=>{
        let newtext=text.toLowerCase()
        setText(newtext)   
        props.showAlert("Converted to lower case","success")     
    }
    const handleSpChange=()=>{
        var newtext=""
        setText(newtext)
        props.showAlert("Cleared Text","success")
    }
    

    const handleChange=(event)=>{
        console.log("changing the input field/ or typing someting")
        setText(event.target.value)
        // console.log(text)
    }


    return (
        <div className='my-4 container disp '>
            <h1 className='mx-2'>{props.heading}</h1>
            <div className="container mb-3">
                <textarea className={`form-control my-2 Border ${props.mode==="dark"?"BorderDark":"BorderLight"}`} value={text} onChange={handleChange} id="myBox" rows="10" style={{backgroundColor:props.mode==="dark"?"#505050":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
            <div className='my-2'>    
            <button className='btn btn-primary mx-2' onClick={handleUpChange}>Upper Case</button>
            <button className='btn btn-primary mx-2' onClick={handleLoChange}>Lower Case</button>
            <button className='btn btn-primary mx-2' onClick={handleSpChange}>Clear</button>
            </div>
            <br />
            <h4>Text Analyzed</h4>
            <p><i>{text}</i></p>
            </div>
        </div>
    )
}
