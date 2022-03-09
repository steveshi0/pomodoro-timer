import React from 'react';

const taskStyle = {
  flex: "display",
  flexDirection: "row",
  color: "pink"
};

const Task = (props) => {
  return(
    <div style={taskStyle}>
      <h1>EAT</h1>
      <h1>SLEEP</h1>
      <h1>REPEAT</h1>
    </div>
  )
}
export default Task;