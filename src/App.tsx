import "./App.css";
// import { BirthdayPopup } from "./Calendar/BirthdayPopup";
import { Search } from "./Calendar/BirthdayPopup2";
import { Calendar } from "./Calendar/Calendar";

function App() {
  let epochMillis = 828320461000;
  let now = Date.now();
  return (
    <div className="App">
      {/* <div className="BirthdayPopup">
        <BirthdayPopup />
      </div> */}
      <div className="BirthdayPopup2">
        <Search />
      </div>
      <div className="Calendar">
        <Calendar startDate={epochMillis} nowDate={now} />
      </div>
    </div>
  );
}

export default App;
