import "./App.css";
import { Calendar } from "./Calendar/Calendar";

function App() {
  return (
    <div className="App">
      <div className="Calendar">
        <Calendar startDate={0}/>
      </div>
    </div>
  );
}

export default App;
