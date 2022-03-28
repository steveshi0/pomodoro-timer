import React from 'react';

const taskStyle = {
  display: "flex",
  color: "pink",
  fontSize: "25px",
  maxWidth: "90vw",
  alignItems: "center",
};
const individualTaskStyle = {
  float: "right",
  width: "300px",
  height: "60px"
};
const taskFinishStyle = {
  cursor: "pointer",
  width: "40px",
  height: "35px",
  borderRadius: "50%",
  justifyContent: "right",
  justifySelf: "end",
  background: "#76B947",
};

/**
 * Component for individual task
 * @param props: taskNum, taskDescription
 * @returns {individual task}
 * @constructor none
 */
const Task = (props) => {
  //console.log(props);
  return(
    <div style={taskStyle}>
      <p id={"individual-task-num" + props.taskNum} className={"individual_task"} style={individualTaskStyle}>
        <strong>#</strong>{props.taskNum + 1}: {props.taskDescription}
      </p>
      <button id={"task-finish-num" + props.taskNum} type={"button"}
              style={taskFinishStyle} onClick={(e) => props.finishTask(props.taskNum)}>&#10003;
      </button>
    </div>
  )
}
export default Task;