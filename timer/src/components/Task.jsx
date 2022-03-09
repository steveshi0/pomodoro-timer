import React from 'react';

const taskStyle = {
  flex: "display",
  flexDirection: "row",
  color: "pink"
};

const Task = (props) => {
  return(
    <div style={taskStyle}>
      {/*<input type={"checkbox"} />
      <textarea>Sleep like your about to die</textarea>*/}
    </div>
  )
}
export default Task;