import { useState, useEffect } from 'react';
import './index.css'

export default function LeftHeader() {
    
  const [date, setDate] = useState(new Date());
  const [greeting, setGreeting] = useState('Good evening');
  

  // refreshClock：
  const refreshClock=()=> {
    setDate(new Date());
 }
    
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  
  
  // refreshGreeting:
  const hour = date.getHours();
  const refreshGreeting = () => { 
    if (hour >= 20 || hour < 6) {
      setGreeting("Good evening")
    } else if(hour>=6 && hour<12)
    {
      setGreeting("Good morning")
    } else if(hour>=12 && hour<20)
    {
      setGreeting("Good afternoon")
    } 
  }


  useEffect(() => {
    refreshGreeting()
    },[hour]);

  
  // return:
    return (
      <div className='header'>
            <h2>{greeting} </h2> 
       <div className='clock'>       
           <span>
          {date.toLocaleDateString('en-AU', { dateStyle: 'full'})}
          </span>
          <span>
          {date.toLocaleTimeString('en-AU', { timeStyle:'medium' })}
          </span>
        </div>  
    </div>
  );
}


