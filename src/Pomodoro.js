import React,{useState,useEffect} from 'react'
import './App.css'

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [count, setCount] = useState(1)
  const [breakMessage, setBreakMessage] = useState(false)
  const [workMessage, setWorkMessage] = useState(false)

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds
 
  
  useEffect(()=>{
    
        setTimeout(() => {
      
          if (seconds === 0) {
            if (minutes !== 0) {
              setSeconds(59)
              setMinutes(minutes - 1)
             
    
            } else {
              let minutes = breakMessage ? 24 : 4
              let seconds = 59
    
              setSeconds(seconds)
              setMinutes(minutes)
              setBreakMessage(!breakMessage)
              setWorkMessage(!workMessage)
              
                
            }
          } else {
            setSeconds(seconds - 1)
          }
         
        }, 1000)
                 
      }
      
       
      
    ,[seconds])
  

  
  const increment=()=>{
      setCount((prevCount)=>prevCount+1)

  }
  const decrement=()=>{
    if(count === 1){
        return;  
      }
    setCount((prevCount)=>prevCount-1)

}

const handleSession=(count)=>{
    setWorkMessage(!workMessage)

    
}

    return (
      <div className="pomodoro">
     
    
      
      
      <div >Set number of session Cycles</div>
      <button onClick={increment} className='btn'>+</button>{count}<button onClick={decrement} className='btn'>-</button><br></br>
      <button onClick={()=>handleSession(count)}>Start session</button>
      
      
      <div className="message">
      
      
      {breakMessage && <div className='breakMsg'>Break time! New session starts in:{timerMinutes}:{timerSeconds}</div>}

      {workMessage && <div className='workMsg'>Let's concenterate on work! {timerMinutes}:{timerSeconds}</div>}
     
    </div>
    </div>
    )
}

export default Pomodoro
