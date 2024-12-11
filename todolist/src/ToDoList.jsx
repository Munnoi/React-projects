import React, { useState } from 'react'

function ToDoList() {
  const [tasks, setTasks] = useState(['eat', 'shower', 'code'])
  const [newTask, setNewTask] = useState('')

  function handleInputChange(event) {
    setNewTask(event.target.value)
  }

  function addTask() {
    if (newTask.trim() !== '') {
      setTasks(t => [...t, newTask])
      setNewTask('')
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, idx) => idx !== index)
    setTasks(updatedTasks)
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }
  
  return (<div className='to-do-list'>
    <h1>To-Do-List</h1>

    <div>
      <input
        type="text"
        placeholder='Enter a task...'
        value={newTask}
        onChange={handleInputChange}
      />
      <button
        className='add-button'
        onClick={addTask}
      >Add</button>
    </div>

    <ol>
      {tasks.map((task, idx) => <li key={idx}>
        <span className='text'>{task}</span>

        <button
          className='delete-button'
          onClick={() => deleteTask(idx)} 
        >Delete</button>

        <button
          className='move-button' 
          onClick={() => moveTaskUp(idx)}
        >👆</button>
        
        <button
          className='move-button' 
          onClick={() => moveTaskDown(idx)}
        >👇</button>
      </li>)}
    </ol>
  </div>)
}
export default ToDoList