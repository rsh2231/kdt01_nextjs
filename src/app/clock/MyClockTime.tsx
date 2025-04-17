'use client'
import { useState, useEffect } from "react" 
import styles from "./MyClockTime.module.css"

export default function MyClockTime() {
  //useState 타입선언 
  const [currentTime , setCurrentTime ] = useState<Date>(new Date()) ;

  useEffect(()=>{
    let tm = setInterval(()=>{
      setCurrentTime(new Date()) ;
    }, 1000) ; 

    return () => {
      clearInterval(tm)  
    } 
  }, []) ;

  return (
    <div className="w-full p-5 text-lime-900
                    text-center font-bold
                    text-2xl">
      <p className="pst">
      현재시각 
      </p>
      <p className={styles.pst}>
        {currentTime.toLocaleTimeString()}  
      </p> 
    </div>
  )
}