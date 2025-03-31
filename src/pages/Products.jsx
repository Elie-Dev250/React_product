import React from 'react'
import { useState } from 'react'




function Products() {

  const [color,setcolor]=useState("ffffff")
  function handlecolor(event){
    setcolor(event.target.value)
  }
  return (
    <div>
      <h1>color picker</h1>

      <div className='color-picker'>
        <div className='tools' style={{backgroundColor:color}}>
        <p>Selected color :{color}</p>
          

          
        </div>
        <label>select color:</label>
        <input type="color"  value={color} onChange={handlecolor}/>
      </div>
    </div>
  )
}

export default Products
