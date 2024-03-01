import React,{useState,useEffect} from 'react'

const SevenTimer = () => {
    const [time,setTime]=useState(59);
    useEffect(()=>{
        if(time>0){
            const timer=setTimeout(()=>setTime(time-1),1000);
            return ()=>clearTimeout(timer)
        }
    },[time])
  return (
    <>
    <h1>Left-Time:{time}</h1>
    </>
  )
}

export default SevenTimer
