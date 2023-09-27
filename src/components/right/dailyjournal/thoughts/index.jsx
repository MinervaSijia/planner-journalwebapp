import React from 'react'
import './index.css'

const ThoughtsJournal = (props) => {

    const { time,weekday } = props;
   

  const description = `${weekday} ${time} Thougthts`;
  


    const submitValue = (event) => {
        const value = event.target.value;
        localStorage.setItem(description, value)
    }
 
  return (
    <div className='ThoughtsJournal' >
          <h3>{description}</h3>
          <textarea cols="30" rows="3" onBlur={submitValue}>{localStorage.getItem(description)}</textarea>
    </div>
  )
}

export default ThoughtsJournal


