import React, { useState } from 'react';
function ToDoList(){
    const[tasks, setTasks] = useState([]);
    const[taskName, setTaskName] = useState("");
    const[taskDate, setTaskDate] = useState(new Date().getDate());

    const[completedTasks, setCompletedTasks] = useState([]);

    function addTask(){
        const newTask = {name: taskName, date:taskDate};

        setTasks(t => [...t, newTask])
    }

    function addToCompletedList(index){
        const newCompletedTask = {name: taskName, date:taskDate}
        setCompletedTasks(s => [...s, newCompletedTask])
        //delete in tasks list
        setTasks(tasks.filter((_,i) => i !== index) )
    }

    function removeCompletedTask(index){
        setCompletedTasks(completedTasks.filter((_,i) => i !== index) )
    }

    function changeDate(event){
        setTaskDate(event.target.value)
    }

    function changeName(event){
        setTaskName(event.target.value)
    }

    return(<div id= "to-do-list">
        <h1>Bro get ur grind done</h1>
        <div id="input-container">
            <input type="text" placeholder="Type in your task!" id="text-input" onChange={changeName}></input>
            <input type="date" id="calendar-input" onChange={changeDate}></input>
            <button onClick={addTask}>Add</button>
        </div>
        <div id="tasks-list">
            <h2>Tasks:</h2>
            <ul>
                {tasks.map((task,index) => 
                <li key={index}><span className='task-name'>{task.name} {task.date}</span>
                <button id="btn-task-done" onClick={() => (addToCompletedList(index))}>Done</button>
                </li>)}
            </ul>
        </div>
        <div id="completed-tasks-list">
            <h2>Completed tasks:</h2>
            <ul>
                {completedTasks.map((task,index) => 
                <li key={index}><span className='task-name'>{task.name} {task.date}</span>
                <button id="btn-task-delete" onClick={() => (removeCompletedTask(index))}>Delete</button></li>)}
            </ul>
        </div>
    </div>)
}

export default ToDoList