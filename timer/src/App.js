import './App.css';

import Header from "./components/Header";
import PomodoroSession from "./components/PomodoroSession";
import PomodoroTask from "./components/PomodoroTask";

function App() {
  return (
    <div id={"pomodoro_timer"} style={{alignItems: 'center'}}>
      <Header />
      <PomodoroSession />
      <PomodoroTask />
    </div>
  );
}

export default App;