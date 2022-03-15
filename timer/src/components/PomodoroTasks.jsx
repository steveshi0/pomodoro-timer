import React, {useState} from 'react';
import './PomodoroTasks.css';
import Task from './Task.jsx';

const PomodoroTasks = () => {
  // TaskList containing all Task component that will be shown on the screen
  const [newTask, setTask] = useState("");
  const [taskList, setTaskList] = useState([
      "(Default)吃🍔🍣",
      "(Default)睡😪💤",
      "(Default)玩🤪👻",
      "(Default)重复⏳⌛⏳⌛"
  ]);

  const randomTask = ["Sew something", "Play a game", "Get drunk", "Build a quantum computer", "Watch a movie", "Meditate",
    "Read a book", "Waste time by Watch funny Youtube vidoes", "Sing along to your favorite hits", "Play with your pet",
    "Try new hairstyles", "Fly a kite", "Visit an arcade", "Hunt some ghost", "Learn a magic trick", "Go roller skating",
    "Go on a road trip", "Go for picnic", "Go bowling", "Have a water fight with a stranger", "Create a playlist",
    "Make a slip 'n slide", "Make a gift list", "Play twister", "Browse Reddit for 10 years", "Daydream"];

  // add(), delete(), check/uncheck() from the taskList
  function addTask(e) {
    document.getElementById("add-task-input").value="";
    if (newTask.length === 0) {
      giverUserRandomTask();
    } else if (taskList.indexOf(newTask) > -1) {
      window.alert("Enter a valid task that is that not already exist within the task list");
    } else {
      setTaskList([...taskList, newTask]);
      setTask("");
    }
  }
  function deleteTask(taskNumber) {
    setTaskList(taskList.filter(currTask => currTask !== taskList[taskNumber]));
  }

  // Give the user a random task when a blank task is entered
  function giverUserRandomTask() {
    window.alert("Why must you enter a blank task into the list??🥴\n" +
      "Since the I'm a cool timer, a random task gonna be added to the list 🤡🤡");
    setTaskList([randomTask[Math.floor(Math.random() * (25 + 1))], ...taskList]);
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
        <input id={"add-task-input"} type={"text"} placeholder={"️✍️ New task go here ✍️"} onChange={(e) => {
          setTask(e.target.value);
        }}/>
        <button id={"add-task-btn"} type={"button"} onClick={addTask}>+</button>
      </div>
    </div>
  )
}
export default PomodoroTasks;