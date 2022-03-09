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
    this.handleSessionChangeStyling = this.handleSessionChangeStyling.bind(this);
    this.handleSessionStart = this.handleSessionStart.bind(this);
    this.handleSessionStartStyling = this.handleSessionStartStyling.bind(this);
  }

  // Make a type of Pomodoro Session change
  handleSessionChange(e) {
    if (this.state.countingDown) {
      if (!window.confirm("Switching will end current unfinished session").valueOf()) {
        return;
      }
    }
    const newSessionNum = TYPE.indexOf(e.target.value);
    this.handleSessionChangeStyling(newSessionNum);
    this.setState({
      sessionNum: newSessionNum,
      minutes: TIME[newSessionNum],
      seconds: 0,
      countingDown: false
    });
  }
  handleSessionChangeStyling(newSessionNum) {
    document.getElementById("session-item" + this.state.sessionNum).classList.remove("session-selected");
    document.getElementById("session-item" + newSessionNum).classList.add("session-selected");
  }

  // Start button behaviors when clicked on
  handleSessionStart(e) {
    this.setState((prevState) => ({
      countingDown: !prevState.countingDown
    }));
    this.handleSessionStartStyling();
  }
  handleSessionStartStyling() {
    const containsPressed = document.getElementById("session-start").classList.contains("session-start-on");
    if (!containsPressed) {
      document.getElementById("session-start").classList.add("session-start-on");
    } else {
      document.getElementById("session-start").classList.remove("session-start-on");
    }
  }

/*  printTime() {
    return
    <h1>
      {this.state.minutes > 0 ? this.state.minutes : "00"}:{(this.state.seconds === 0) ? this.state.seconds + "0"
      : (this.state.seconds < 10)
        ? "0" + Number.toString(this.state.seconds) : this.state.seconds}
    </h1>
  }*/

  // Mount when the user click on Start button
  componentDidMount() {
    document.getElementById("session-item" + this.state.sessionNum).classList.add("session-selected");
    this.countDownInterval = setInterval(() => {
      if (this.state.countingDown && this.state.seconds > 0) {
        this.setState((prevState) => ({
          seconds: prevState.seconds - 1
        }));
      } else if (this.state.countingDown && this.state.minutes > 0) {
        this.setState((prevState) => ({
          minutes: prevState.minutes - 1,
          seconds: 59
        }));
      } else if (this.state.countingDown && this.state.minutes === 0 && this.state.seconds === 0) {
        this.handleSessionChangeStyling((this.state.sessionNum + 1) % 3);
        this.handleSessionStartStyling();
        this.setState((prevState) => ({
          sessionNum: (prevState.sessionNum + 1) % 3,
          minutes: TIME[(prevState.sessionNum + 1) % 3],
          seconds: 0,
          countingDown: false
        }));
      }
    }, 1);
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
          {this.state.minutes > 0 ? this.state.minutes : "00"}:{(this.state.seconds === 0) ? this.state.seconds + "0"
            : (this.state.seconds < 10)
              ? "0" + this.state.seconds : this.state.seconds}
        </h1>
        <button id={"session-start"} type={"button"} placeholder={"START"} value={"start"}
                onClick={this.handleSessionStart}>{!this.state.countingDown ? "Start" : "Pause"}</button>
      </div>
    )
  }
}