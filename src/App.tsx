import { useState } from "react";
import "./App.css";
import FormDialog from "./Calendar/BirhdayInputFormDialog";
import BirthDay from "./Calendar/BirhdayInputFormDialogClass";
// import { BirthdayPopup } from "./Calendar/BirthdayPopup";
// import { Search } from "./Calendar/BirthdayPopup2";
import { Calendar } from "./Calendar/Calendar";

function App() {
  const [birthday, setBirthday] = useState(0);
  let now = Date.now();
  return (
    <div className="App">
      <div className="birthday">
        <BirthDay setBirthDay={setBirthday} />
        {"Your birthday is : " + birthday}
      </div>
      {birthday !== 0 ? (
        <div className="Calendar">
          <Calendar startDate={birthday} nowDate={now} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
