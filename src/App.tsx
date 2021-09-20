import "./App.css";
import { Search } from "./Calendar/BirthdayPopup";
// import { BirthdayPopup } from "./Calendar/BirthdayPopup";
import { Calendar } from "./Calendar/Calendar";

function App() {
  let epochMillis = 828320461000;
  let now = Date.now();
  return (
    <div className="App">
      {/* <div className="BirthdayPopup">
        <BirthdayPopup />
      </div> */}
      <div className="BirthdayPopup">
        <Search />
      </div>
      <div className="Calendar">
        <Calendar startDate={epochMillis} nowDate={now} />
      </div>
    </div>
  );
}

export default App;
