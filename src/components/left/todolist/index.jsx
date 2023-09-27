import React, { useCallback, useEffect } from 'react';
import AddInput from './todoHeader/addInput/index'
import TodoItem from './todoItem';
import './index.css';
import { useState } from 'react';

export default function TodoItems() {

    const [isInputShow, setIsInputShow] = useState(false),
        [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList'))||[]);
    
    const openInput = () => {
        setIsInputShow(!isInputShow)
    }

    const addItem = useCallback((value) => {

     const dataItem = {
            id: new Date().getTime(),
            content: value,
            completed: false
     }
        setTodoList(todoList => [...todoList, dataItem]);
        
    }, []);

    useEffect(() => {
        localStorage.setItem('todoList',JSON.stringify([...todoList]))
    },[todoList])

    const toggleComplete = (id) => {
        setTodoList(
            todoList.map(
                (todoItem) => {
                    if (todoItem.id === id) {
                        return { ...todoItem, completed: !todoItem.completed }
                    } else { return todoItem }
                }
            )
        )
    }

    const deleteTodo = (id) => {
        setTodoList(
            todoList.filter(todo=>todo.id !== id))
        }
    

    return (
        <div className='todo-list'>
            <div className='todo-header'>
                <h3>Today's Plan</h3>
                <div className='icon' onClick={openInput}> &#43;</div>
                </div>
            <AddInput isInputShow={isInputShow} addItem={addItem} />
            <ul className='todo-item'>
                {
                    todoList.map((todoItem,index) => {
                        return <TodoItem data={todoItem} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
                    })
                }
             </ul>
        </div>)
        
    }