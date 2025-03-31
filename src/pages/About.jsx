import React from 'react'
import { useState } from 'react'


function About() {
  const [text,settext]=useState("")

  function handlefortext(event){
    settext(event.target.value)
  }

  
  return (
    <div>
      <h1>About page</h1>
      <input type="text" name="username" id="user1"  placeholder='enter user here'
      onChange={handlefortext}
      />
      <p>text entered is {text}</p>
    </div>
  )
}

export default About
