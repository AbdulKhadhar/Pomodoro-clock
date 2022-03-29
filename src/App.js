import './App.css';
import TimerLengthControl from "./Components/TimerLengthControl"
import Timer from "./Components/Timer"

function App() {
  
  return (
    <div className="App">
      <TimerLengthControl />
      <Timer />
    </div>
  );
}

export default App;
