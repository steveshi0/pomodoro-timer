import React from 'react';
import './PomodoroTask.css';

export default class PomodoroTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: []
    }
  }

  render() {
    return (
      <div>My Tasks to work on</div>
    )
  }
}