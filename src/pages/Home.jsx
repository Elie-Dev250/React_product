import React from 'react'
import { useState,useEffect } from 'react'


function Home() {

  const [time,setTime]=useState(new Date())
  useEffect(()=>{
    const interval=setInterval(()=>{
setTime(new Date());
    },1000)


    return ()=>{
      clearInterval(interval);
    }
  },[]);


    function format(){
      let hours=time.getHours()
      const minutes=time.getMinutes()
      const seconds=time.getSeconds()
      const meridium=hours>=12? 'PM' :'AM';
      hours=hours%12 || 12

      return`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${meridium}`

      
    }

    function padZero(numbers){
      return (numbers < 10 ? "0": "") +numbers
    }
  
return(
  <div className='digital'>
    <div className='clock'>
      <span>{format()}</span>
    </div>
  </div>
)

}

export default Home
