import React from 'react'
import './index.css'
import LeftHeader from './left-header/index'
import PrioritySection from './prioritySection/index'
import TodoItems from './todolist/index'


export default function Left() {
    return (
        <div className='left'>
            <LeftHeader />
            <PrioritySection />
            <TodoItems />
        </div>
    )
}