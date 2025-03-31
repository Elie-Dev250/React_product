import React from 'react'
import ComponentC from './ComponentC'

function ComponentB() {
  return (
    <div className='box'>
      <h1>componentB</h1>
      <ComponentC/>
    </div>
  )
}

export default ComponentB
