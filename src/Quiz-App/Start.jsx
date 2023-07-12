import { useState } from "react";

export default function Start({setUsername}) {

    const [text,setText] = useState(null);

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleOnClick = () =>{
        setUsername(text);
    }
  return (
    <>
        <div className="start">
            <input type="text" placeholder="enter your name" className="startInput" onChange={handleOnChange}/>
            <button className="startBtn" onClick={handleOnClick}>Start</button>
        </div>
    </>
  )
}
