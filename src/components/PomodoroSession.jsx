import React from 'react';
import './PomodoroSession.css';

// Different type of pomodoro session and their correponding time periods
export const TYPE = ["Work Time", "Short Break", "Long Break"];
export const TIME = [25, 5, 15];
let studyNum = 0;

/**
 * Session Component that contains the 3 differen type of pomo-sessions(work, short-break, long-break),
 * timer for the respective session along with the start/pause button
 * Default-value of Work time(25 minutes) or whatever session-number that is passed in as the prop
 * refer to the TYPE/TIME const for the respective sessions.
 */
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
    this.printTime = this.printTime.bind(this);
  }

  // Switch among the different sessions(Work, Short-break, Long-break)
  // Handle the styling of the session type btn when another is set to be the new session
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
    this.props.backgroundNum(newSessionNum);
  }

  // Start the current session with the timer counting down
  // Handle the styling of the start btn when it is clicked to be started and paused
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

  // Print the current timer in ##:## format
  printTime() {
    let minutes = (this.state.minutes) > 0 ? this.state.minutes : "00";
    let seconds = (this.state.seconds === 0) ? this.state.seconds + "0"
      : (this.state.seconds < 10)
        ? "0" + this.state.seconds : this.state.seconds;

    return minutes + ":" + seconds
  }

  // Lifecycle of pomodoro timer: every 4 study session will result in a long-break, all other are Study -> Short break
  pomodoroLifeCycle() {
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
      if (this.state.sessionNum === 0) {
        studyNum++;
      }
      if (studyNum === 4) {
        this.handleSessionChangeStyling(2);
        this.setState({
          sessionNum: 2,
          minutes: TIME[2],
          seconds: 0,
          countingDown: true
        });
        studyNum = 0;
      } else if (studyNum !== 4){
        if (this.state.sessionNum === 2) {
          this.handleSessionChangeStyling(0);
          this.setState({
            sessionNum: 0,
            minutes: TIME[0],
            seconds: 0,
            countingDown: true
          });
        } else {
          this.handleSessionChangeStyling((this.state.sessionNum == 0) ? 1 : 0);
          this.setState((prevState) => ({
            sessionNum: prevState.sessionNum === 0 ? 1 : 0,
            minutes: TIME[prevState.sessionNum === 0 ? 1 : 0],
            seconds: 0,
            countingDown: true
          }));
        }
      }
    }
  }

  // Tab Title
  setTabTile() {
    var tabTyle = (this.state.sessionNum == 0) ? "Time to Grind"
      : (this.state.sessionNum === 1) ? "A Short Break" : "Relax for a Long time";
    document.title = this.printTime() + " - " + tabTyle;
  }

  // Mount when the user click on Start button
  componentDidMount() {
    document.getElementById("session-item" + this.state.sessionNum).classList.add("session-selected");
    this.countDownInterval = setInterval(() => {
      this.pomodoroLifeCycle();
      this.setTabTile();
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
          {this.printTime()}
        </h1>
        <button id={"session-start"} type={"button"} placeholder={"START"} value={"start"}
                onClick={this.handleSessionStart}>{!this.state.countingDown ? "Start" : "Pause"}</button>
      </div>
    )
  }
}