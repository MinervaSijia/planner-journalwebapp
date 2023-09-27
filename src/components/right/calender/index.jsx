import React from 'react'
import './index.css'

export default function Calender({addClassActive}) {
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
       
        <div className="calender">
            <ul className='day-list'>
                {weekdays.map(
                    (weekday,index) => {
                        return <li onClick={(event) => { addClassActive(event.target.innerHTML) }} key={index} data-content={weekday}>{weekday}</li>
                    }
                )}
            </ul>
        </div>
    )
}

const li = document.querySelector('.day-list li');
console.log(li)