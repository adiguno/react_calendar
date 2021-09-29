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

    let extraWeeks = 52 * ageYearsRemainder;
    let extraWeeksRemainder = extraWeeks % 1;
    let extraWeeksWhole = extraWeeks - extraWeeksRemainder;
    this.yearsPast = ageYearsWhole;
    this.weeksPast = extraWeeksWhole;

    let currentYear = ageYearsWhole + 1;
    let currentWeek = extraWeeksWhole + 1;
    // console.log(`age: ${age}`);
    // console.log(`current year: ${currentYear}`);
    // console.log(`current week: ${currentWeek}`);
    // console.log(`age in epoch millis: ${age}`);
    // console.log(`age in years: ${ageYears}`);
    // console.log(`age in years whole: ${ageYearsWhole}`);
    // console.log(`age in years remainder: ${ageYearsRemainder}`);
    // console.log(`extra weeks: ${extraWeeks}`);
    // console.log(`extra weeks whole: ${extraWeeksWhole}`);
    // console.log(`years past: ${this.yearsPast}`);
    // console.log(`weeks past: ${this.weeksPast}`);
  }
  state: CalendarState = {
    startDate: 0,
  };

  render() {
    const hundredYears = this.renderYears(100);

    return (
      <div>
        <h1>Your Calendar</h1>
        <div>{hundredYears}</div>
      </div>
    );
  }

  renderYears(num: number) {
    let years = [];
    let year;
    // past years
    for (let i = 1; i < this.yearsPast + 1; i++) {
      year = (
        <Year
          key={`year${i}`}
          index={i}
          weeksPast={52}
          pastCurrentFuture={"past-year"}
        />
      );
      years.push(year);
    }

    // current year
    let currentYear = this.yearsPast + 1;
    // console.log(`currentYear: ${currentYear}`);
    year = (
      <Year
        key={`year${currentYear}`}
        index={currentYear}
        // past={false} // todo change or add new attr
        weeksPast={this.weeksPast}
        pastCurrentFuture={"present-year"}
      />
    );
    years.push(year);

    // future years
    for (let i = this.yearsPast + 2; i < num + 1; i++) {
      year = (
        <Year
          key={`year${i}`}
          index={i}
          weeksPast={0}
          pastCurrentFuture={"future-year"}
        />
      );
      years.push(year);
    }
    return years;
  }
}
