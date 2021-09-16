import "./App.css";
import { Calendar } from "./Calendar/Calendar";

function App() {
  let epochMillis = 828320461000;
  let now = Date.now();
  return (
    <div className="App">
      <div className="Calendar">
        <Calendar startDate={epochMillis} nowDate={now} />
      </div>
    </div>
  );
}

export default App;
