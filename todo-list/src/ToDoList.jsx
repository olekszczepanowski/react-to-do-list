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
        <div id="input-container" className="colorful-mode-input">
            <input type="text" placeholder="Type in your task!" id="text-input" onChange={changeName}></input>
            <input type="date" id="calendar-input" onChange={changeDate}></input>
            <button id="btn-task-add" onClick={addTask}><span class="material-symbols-outlined">add</span></button>
        </div>
        <div id="tasks-list">
            <h2>Tasks:</h2>
            <ul>
                {tasks.map((task,index) => 
                <li key={index}>
                <span className='task-name'>{task.name}</span>
                <div className='right-side-li'>
                    <span className="task-date">{task.date}</span>
                    <button className="btn-task-done" onClick={() => 
                        (addToCompletedList(index))}>
                            <span class="material-symbols-outlined">check</span>
                            </button>
                </div></li>)}
            </ul>
        </div>
        <div id="completed-tasks-list">
            <h2>Completed tasks:</h2>
            <ul>
                {completedTasks.map((task,index) => 
                <li key={index}>
                <span className='task-name'>{task.name}</span>
                <div className='right-side-li'>
                    <span className="task-date">{task.date}</span>
                    <button className="btn-task-delete" onClick={() => 
                        (removeCompletedTask(index))}><span class="material-symbols-outlined">close</span>
                        </button>
                </div>
                </li>)}
            </ul>
        </div>
    </div>)
}

export default ToDoList