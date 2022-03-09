import './App.css';
import Header from "./components/Header";
import PomodoroSession, {TYPE} from "./components/PomodoroSession";
import PomodoroTasks from "./components/PomodoroTasks";

function App() {
  return (
    <div id={"pomodoro_timer"} style={{alignItems: 'center'}}>
      <Header />
      <PomodoroSession defaultSessionNum={0}/>
      <PomodoroTasks />
    </div>
  );
}

export default App;