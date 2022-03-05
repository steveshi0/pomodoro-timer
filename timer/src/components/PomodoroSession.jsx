import React, {useState, useEffect, useRef} from 'react';
import './PomodoroSession.css';

const TYPE = ["Work Time", "Short Break", "Long Break"];
const TIME = ["25:00", "5:00", "15:00"];

export default class PomodoroSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: TYPE,
      time: TIME
    }
    this.changeSession = this.changeSession.bind(this);
    this.startSession = this.startSession.bind(this);
  }
  changeSession(e) {
    console.log(e.target.value);
  }
  startSession() {

  }

  render() {
    return (
      <div className={"session_root_container"}>
        <div className={"session_type_container"}>
          {this.state.type.map((currType, idx) => {
            return <button key={idx} className={"session-item"} type={"button"}
                           value={currType} onClick={this.changeSession}>{currType}</button>
          })}
        </div>
        <h1 className={"session-time"}>{this.state.time[1]}</h1>
        <button className={"session-start"} type={"button"} placeholder={"START"}>Begin</button>
      </div>
    )
  }
}