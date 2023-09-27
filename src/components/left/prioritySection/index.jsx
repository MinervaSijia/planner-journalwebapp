import React,{useEffect, useState} from 'react'
import './index.css'

export default function PrioritySection() {
    
    const [content, setContent] = useState(() => {
      return  localStorage.getItem('priority')?localStorage.getItem('priority'):'Please enter...'
    })

    useEffect(() => {
        localStorage.setItem('priority', content);
      
    },[content])

    const removeDefaultText = (event) => {
        if (localStorage.getItem('priority') !== 'Please enter...') return;
        event.target.value = '';
        setContent('');
    }

    const addDefaultText = (event) => {
        if (!content) {
            setContent('Please enter...');
            event.target.value = 'Please enter...';
        }
    }

        return (
            <form className='prioritySection'>
                <label>Today's Top Priority</label>
                <textarea onChange={(event) => setContent(event.target.value)} onClick={removeDefaultText} onBlur={addDefaultText}>{content}</textarea>
            </form>
        )
    
}