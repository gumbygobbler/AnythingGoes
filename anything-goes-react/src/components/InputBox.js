import React from 'react'
import { useState } from "react";

function InputBox() {
    const [fighterImage, setFighterImage] = useState("")
    const [fighter, setFighter] = useState("Fighter name")

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`${fighter} got sent somewhere... also ${fighterImage}`)
    }

    function handleChange(e) {
        console.log(e.target.files);
        setFighterImage(URL.createObjectURL(e.target.files[0]))
    }
    
    return (
        <div id="inputBox">
            <h1>What does your fighter look like?</h1>
            <br></br>
            <form onSubmit={handleSubmit}>
                <label for='fighter'>Select An Image</label>
                <br></br>
                <br></br>
                <img id="fighterImage" src={fighterImage} 
                style={{width: '100%'}} alt=""></img>
                <br></br>
                <br></br>
                <input 
                    type='file' 
                    id='fighter' 
                    name='fighter' 
                    accept="image/*" 
                    onChange={handleChange}/>
                <br></br>
                <br></br>
                <label for='fighterName'>What is the name of your fighter?</label>
                <br></br>
                <br></br>
                <input 
                    type='text' 
                    id='fighterName' 
                    name='fighterName' 
                    value={fighter}
                    onChange={(e)=> setFighter(e.target.value)}/>
                
                <br></br>
                <br></br>
                <input id="submit" type='submit' value="QUEUE THEM IN THE RING!"/>
            </form>
        </div>
    )
}

export default InputBox