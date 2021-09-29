import React from "react";
import { Week } from "./Week";
import CSS from "csstype";

type YearProps = {
  index: number;
  weeksPast: number;
  pastCurrentFuture: string;
};

export class Year extends React.Component<YearProps, {}> {
  weeksPast: number;
  constructor(props: YearProps) {
    super(props);
    this.weeksPast = this.props.weeksPast;
  }

  render() {
    return <div style={this.style}>{this.renderWeekss(52)}</div>;
  }

  renderWeekss(num: number) {
    let weeks = [];
    let week;
    if (this.props.pastCurrentFuture === "past-year") {
      for (let i = 1; i < num + 1; i++) {
        week = this.getPastWeek(i);
        weeks.push(week);
      }
      return weeks;
    } else if (this.props.pastCurrentFuture === "future-year") {
      for (let i = 1; i < num + 1; i++) {
        week = this.getFutureWeek(i);
        weeks.push(week);
      }
    } else {
      // weeks past
      for (let i = 1; i < this.weeksPast + 1; i++) {
        week = this.getPastWeek(i);
        weeks.push(week);
        // console.log(`past: ${i}`);
      }
      // week present
      let currentWeek = this.weeksPast + 1;
      week = this.getCurrentWeek(currentWeek);
      weeks.push(week);
      // console.log(`current: ${currentWeek}`);

      // weeks future
      for (let i = this.weeksPast + 2; i < num + 1; i++) {
        week = this.getFutureWeek(i);
        weeks.push(week);
        // console.log(`future: ${i}`);
      }
    }

    return weeks;
  }

  getPastWeek(weekIndex: number) {
    return (
      <Week
        key={`year${this.props.index}week${weekIndex}`}
        index={weekIndex}
        pastCurrentFuture={"past-week"}
      />
    );
  }
  getCurrentWeek(weekIndex: number) {
    return (
      <Week
        key={`year${this.props.index}week${weekIndex}`}
        index={weekIndex}
        pastCurrentFuture={"current-week"}
      />
    );
  }
  getFutureWeek(weekIndex: number) {
    return (
      <Week
        key={`year${this.props.index}week${weekIndex}`}
        index={weekIndex}
        pastCurrentFuture={"future-week"}
      />
    );
  }

  style: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
  };
}
