import React from 'react';
import './PomodoroTasks.css';
import Task from './Task.jsx';

export default class PomodoroTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: []
    }
  }
  render() {
    return (
      <div>
        <Task number={this.state.length + 1} description={"eat"}/>
      </div>
    )
  }
}