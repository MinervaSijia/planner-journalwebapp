import React, {useState } from 'react'
import DailyJournal from './dailyjournal/index'
import './index.css'
import Calender from './calender/index'

export default function Right() {
    
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                     [active,setActive]=useState('Mon')

    const addClassActive = (weekday) => {
        setActive(weekday)
    }


    return (
        <div className='Right'>
            {weekdays.map(
                (weekday) => {
                    if (active === weekday) { return <DailyJournal key={weekday} weekday={active} /> }
                }
            )}
            <Calender addClassActive={addClassActive}/>
        </div>
    )
}