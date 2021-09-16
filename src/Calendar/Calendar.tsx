import * as React from "react";
import { Year } from "./Year";

type CalendarState = {
  startDate: number; //
};
type CalendarProps = {
  startDate: number;
  nowDate: number;
};

export class Calendar extends React.Component<CalendarProps, CalendarState> {
  yearsPast: number;
  weeksPast: number;
  constructor(props: CalendarProps) {
    super(props);
    let age = this.props.nowDate - this.props.startDate;
    let ageYears = age / 31536000000;
    let ageYearsRemainder = ageYears % 1;
    let ageYearsWhole = ageYears - ageYearsRemainder;
    let currentYear = ageYearsWhole + 1;

    let extraWeeks = 52 * ageYearsRemainder;
    let extraWeeksRemainder = extraWeeks % 1;
    let extraWeeksWhole = extraWeeks - extraWeeksRemainder;
    let currentWeek = extraWeeksWhole + 1;
    console.log(`age: ${age}`);
    console.log(`current year: ${currentYear}`);
    console.log(`current week: ${currentWeek}`);
    console.log(`age: ${age}`);
    console.log(`age in years: ${ageYears}`);
    console.log(`age in years whole: ${ageYearsWhole}`);
    console.log(`age in years remainder: ${ageYearsRemainder}`);
    console.log(`extra weeks: ${extraWeeks}`);
    console.log(`extra weeks whole: ${extraWeeksWhole}`);
    this.yearsPast = ageYearsWhole;
    this.weeksPast = extraWeeksWhole;
  }
  state: CalendarState = {
    startDate: 0,
  };

  renderYears(num: number) {
    let years = [];
    let year;
    for (let i = 1; i < this.yearsPast + 1; i++) {
      year = <Year key={`year${i}`} index={i} past={true} weeksPast={0} />;
      years.push(year);
    }
    let current = this.yearsPast + 1;
    let weeksPast = (year = (
      <Year
        key={`year${current}`}
        index={current}
        past={false}
        weeksPast={this.weeksPast}
      />
    ));
    years.push(year);

    for (let i = this.yearsPast + 2; i < num + 1; i++) {
      year = <Year key={`year${i}`} index={i} past={false} weeksPast={0} />;
      years.push(year);
    }
    return years;
  }

  render() {
    const hundredYears = this.renderYears(100);

    return (
      <div>
        <h1>Your Calendar</h1>
        <div>{hundredYears}</div>
      </div>
    );
  }
}
