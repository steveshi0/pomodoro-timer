import React, {useState, useEffect} from 'react';
import './PomodoroTasks.css';
import Task from './Task.jsx';

const PomodoroTasks = () => {
  // TaskList containing all Task component that will be shown on the screen
  const [newTask, setTask] = useState("");
  const [taskList, setTaskList] = useState([
      "吃",
      "睡",
      "重复"
  ]);
  const randomSmilingFace = <span id={"random-smiling-face"} style={{fontSize: "1000px"}}>&#129322;</span>

  // add(), delete(), check/uncheck() from the taskList
  function addTask(e) {
    document.getElementById("add-task-input").value="";
    if (newTask.length !== 0 && taskList.indexOf(newTask) === -1) {
      setTaskList([...taskList, newTask]);
      setTask("");
    } else {
      window.alert("Enter a valid task that is either not empty or already exist within the task list");
    }
  }
  function deleteTask(taskNumber) {
    setTaskList(taskList.filter(currTask => currTask != taskList[taskNumber]));
  }

  function checkTask(e) { // UNFINISHED
    const currBtn = document.getElementById(e.target.id).classList;
    if (currBtn.contains("finished_task")) {
      currBtn.remove("finished_task");
    } else {
      currBtn.add("finished_task");
    }
  }
  
  // return the current task to pomodoro_timer within app.js
  return(
    <div id={"tasks-root-container"}>
      <div id={"task-list-container"}>
        {taskList.map((currTask, idx) => {
          return <Task taskNum={idx} taskDescription={currTask} key={idx} finishTask={(e) => deleteTask(e)}/>
        })}
      </div>
      <div id={"add-task-container"}>
        <input id={"add-task-input"} type={"text"} placeholder={"️✍️ New task go here ✍️"} onChange={(e) => setTask(e.target.value)}/>
        <button id={"add-task-btn"} type={"button"} onClick={addTask}>+</button>
      </div>
    </div>
  )
}

export default PomodoroTasks;