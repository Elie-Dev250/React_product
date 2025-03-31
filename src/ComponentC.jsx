import React from 'react'
import { useContext } from 'react'
import ComponentD from './ComponentD'
import { usercontext } from './ComponentA'

function ComponentC() {
    const user=useContext(usercontext)
  return (
    <div className='box'>
      <h1>ComponentC</h1>
      <h2>slam{user}</h2>
      <ComponentD />
    </div>
  )
}

export default ComponentC
