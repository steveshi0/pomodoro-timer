import './App.css';
import Header from "./components/Header";
import PomodoroSession, {TYPE} from "./components/PomodoroSession";
import PomodoroTasks from "./components/PomodoroTasks";

function App() {
  return (
    <div id={"pomodoro_timer"} style={{alignItems: 'center'}}>
      <Header />
      <PomodoroSession id="Hello" defaultSessionNum={0}
                       backgroundNum={(e) => {
                         document.getElementById("root").classList.remove(document.getElementById("root").classList.item(0));
                         document.getElementById("root").classList.add("backgroundNum_" + e);
                       }
      }/>
      <PomodoroTasks />
    </div>
  );
}

export default App;