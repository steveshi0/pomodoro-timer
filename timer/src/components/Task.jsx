import React from 'react';

const taskStyle = {
  display: "flex",
  flexDirection: "flex-end",
  color: "pink",
  fontSize: "18.4px",
  maxWidth: "90vw",
  alignItems: "center",
};

const taskFinishStyle = {
  display: "flex",
  flexDirection: "flex-end",
  maxHeight: "4vh",
  border: "none",
  borderRadius: "5vw",
  justifyContent: "right"
};

const individualTaskStyle = {

};

/**
 * Component for individual task
 * @param props: taskNum, taskDescription
 * @returns {individual task}
 * @constructor none
 */
const Task = (props) => {
  console.log(props);
  return(
    <div style={taskStyle}>
      <p id={"individual-task-num" + props.taskNum} className={"individual_task"}>
        #{props.taskNum + 1}: {props.taskDescription}
      </p>
      <button id={"task-finish-num" + props.taskNum} type={"button"}
              style={taskFinishStyle} onClick={(e) => props.finishTask(props.taskNum)}>&#10003;
      </button>
    </div>
  )
}
export default Task;