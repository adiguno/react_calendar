import { Container } from "@mui/material";
import { useState } from "react";
import "./App.css";
import BirthDayInputDialog from "./Calendar/BirhdayInputFormDialog";
import { Calendar } from "./Calendar/Calendar";

function App() {
  const [birthday, setBirthday] = useState(0);
  let now = Date.now();
  return (
    <div className="App">
      <Container>
        {birthday === 0 ? (
          <div>
            <h1>Feeling Existential?</h1>
            <div className="birthday">
              <BirthDayInputDialog setBirthDay={setBirthday} />
            </div>
          </div>
        ) : (
          <div className="Calendar">
            <Calendar startDate={birthday} nowDate={now} />
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
