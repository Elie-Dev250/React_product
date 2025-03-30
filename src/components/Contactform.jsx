import React from 'react'

function Contactform() {
  return (
    <div>
      <form>
        <input type="text"
        placeholder='name' 
        />
        <br />
        <input type="text" 
        placeholder='email'/>
        <br />
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Contactform
