import React from 'react'
import ThoughtsJournal from './thoughts'
import './index.css'

export default function DailyJournal({weekday}) {
    return (
        <div className='Journal'>
            <ThoughtsJournal time='Morning' weekday={weekday} />
            <ThoughtsJournal time='Midday'  weekday={weekday}/>
            <ThoughtsJournal time='Evening' weekday={weekday} />

        </div>
    )
}