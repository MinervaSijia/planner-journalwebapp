import React,{useRef} from 'react'
import './index.css'

const AddInput = (props) => {

  const { isInputShow,addItem } = props,
         inputRef = useRef();
  
  const submitValue = () => {
    const inputValue = inputRef.current.value.trim();

    if (inputValue.length === 0) {
      return; 
    }
    addItem(inputValue);
    inputRef.current.value = '';
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter') submitValue()
  }
  
  return (
    <div>
          {
              isInputShow ?
                  <div className='input-wrapper'>
                      <input type="text" placeholder='Type the task today' ref={inputRef} onKeyUp={handleEnter}/>
                      <button className='btn' onClick={submitValue}>
                          Add Task
                      </button>
                  </div> :
                  ''
      }
    </div>
  )
}

export default AddInput
