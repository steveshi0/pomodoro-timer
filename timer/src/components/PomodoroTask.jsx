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
      <div>
        <h2>blah 1: Eat</h2>
        <h2>blah 2: Sleep</h2>
        <h2>blah 3: Repeat</h2>
      </div>
    )
  }
}