import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './index.css'

const TodoItem = (props) => {
   const { data,toggleComplete,deleteTodo } = props;
 
  return (
     <li className='todo-item'>
        <span className={`${data.completed ? 'completed' : ""}`} onClick={() => {toggleComplete(data.id)}}>
            {data.content}
        </span>
        <div className='FontAwesomeIcon'>
           <FontAwesomeIcon icon={faTrash} onClick={()=>{deleteTodo(data.id)}} />
        </div>
     </li>
  )
}

export default TodoItem
