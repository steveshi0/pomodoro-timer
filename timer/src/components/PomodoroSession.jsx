import React from 'react';
import './PomodoroSession.css';

// Different type of pomodoro session and their correponding time periods
export const TYPE = ["Work Time", "Short Break", "Long Break"];
export const TIME = [25, 5, 15];

// The session will start at Work Time with 25 minutes
export default class PomodoroSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionNum: props.defaultSessionNum,
      minutes: TIME[props.defaultSessionNum],
      seconds: 0,
      countingDown: false
    }
    this.handleSessionChange = this.handleSessionChange.bind(this);
    this.handleSessionStart = this.handleSessionStart.bind(this);
  }
  handleSessionChange(e) {
    if (this.state.countingDown) {
      const res = window.confirm("Switching will end current unfinished session");
      if (!res.valueOf()) {
        return;
      }
    }
    const newSessionNum = TYPE.indexOf(e.target.value);
    document.getElementById("session-item" + this.state.sessionNum).classList.remove("session-selected");
    document.getElementById("session-item" + newSessionNum).classList.add("session-selected");
    this.setState({
      sessionNum: newSessionNum,
      minutes: TIME[newSessionNum],
      seconds: 0,
      countingDown: false
    });
  }
  handleSessionStart(e) {
    if (this.state.countingDown) {
      document.getElementById(e.target.id).classList.add("session-start-on");
    } else {
      document.getElementById(e.target.id).classList.remove("session-start-on");
    }
    this.setState((prevState) => ({
      countingDown: !prevState.countingDown
    }));
  }

  // Mount when the user click on Start button
  componentDidMount() {
    document.getElementById("session-item" + this.state.sessionNum).classList.add("session-selected");
    this.countDownInterval = setInterval(() => {
      if (this.state.seconds > 0 && this.state.countingDown) {
        this.setState((prevState) => ({
          seconds: prevState.seconds - 1
        }));
      } else if (this.state.minutes > 0 && this.state.countingDown) {
        this.setState((prevState) => ({
          minutes: prevState.minutes - 1,
          seconds: 59
        }));
      } else if (this.state.countingDown) {
        this.setState((prevState) => ({
          sessionNum: (prevState.sessionNum === 2) ? 0 : prevState.sessionNum + 1,
          minutes: (prevState.minutes === 25) ? 5 : (prevState.minutes === 5) ? 15 : 25
        }))
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.countDownInterval);
  }

  render() {
    return (
      <div className={"session_root_container"}>
        <div className={"session_type_container"}>
          {TYPE.map((currType, idx) => {
            return <button id={"session-item" + idx} key={idx} className={"session-item"} type={"button"} value={currType}
                           onClick={this.handleSessionChange}>{currType}</button>
          })}
        </div>
        <h1 className={"session-time"}>
          {this.state.minutes}:{(this.state.seconds === 0) ? this.state.seconds + "0"
            : (this.state.seconds < 10)
              ? "0" + Number.toString(this.state.seconds) : this.state.seconds}
        </h1>
        <button id={"session-start"} type={"button"} placeholder={"START"} value={"start"}
                onClick={this.handleSessionStart}>{!this.state.countingDown ? "Start" : "Pause"}</button>
      </div>
    )
  }
}