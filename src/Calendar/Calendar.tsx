import * as React from "react";

type CalendarState = {
  startDate: number;
};
type CalendarProps = {
  startDate: number;
};

export class Calendar extends React.Component<CalendarProps, CalendarState> {
  constructor(props: CalendarProps) {
    super(props);
    console.log(props);
  }
  state: CalendarState = {
    startDate: 0,
  };
  render() {
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
}
