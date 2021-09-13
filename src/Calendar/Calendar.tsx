import * as React from "react";

export function Calendar() {
  // let arr = [Array(52).keys()];

  let weeks = [];
  for (let i = 1; i < 53; i++) {
    weeks.push(i);
  }

  var fiftyTwoWeeks = weeks.map((item) => <button>{item}</button>);

  let years = [];
  for (let i = 1; i < 101; i++) {
    years.push(i);
  }

  var hundredYears = years.map((item) => <div>{fiftyTwoWeeks}</div>);

  return <div>{hundredYears}</div>;
}
