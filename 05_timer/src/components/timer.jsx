import { useEffect, useState } from "react"

export const Timer = (props)=>{
    
    let startTime = props.startTime
    let endTime = props.endTime
    let [count,setCount] = useState(startTime)

 useEffect(()=>{
   let id =  setInterval(()=>{
        setCount((prev)=>{
            if(prev == endTime){
                clearInterval(id)
                return endTime
            }
            return prev+1
        })
    },1000)
    
    return ()=>{
        console.log("timer reset")
    }
 },[])

   


    return (
        <>
        <h1>Timer : {count}</h1>
        </>
    )
}