import React from "react";
import { Week } from "./Week";
import CSS from "csstype";

type YearProps = {
  index: number;
  weeksPast: number;
};

export class Year extends React.Component<YearProps, {}> {
  weeksPast: number;
  constructor(props: YearProps) {
    super(props);
    // if (this.props.past) {
    //   this.weeksPast = 51;
    // } else {
    //   this.weeksPast = this.props.weeksPast;
    // }
    this.weeksPast = this.props.weeksPast;
  }

  render() {
    return <div style={this.style}>{this.renderWeeks(52)}</div>;
  }

  renderWeeks(num: number) {
    let weeks = [];
    let week;

    // past weeks
    for (let i = 1; i < this.weeksPast + 1; i++) {
      week = (
        <Week key={`year${this.props.index}week${i}`} index={i} past={true} />
      );
      weeks.push(week);
      // console.log(`past: ${i}`);
    }

    // current week
    if (this.weeksPast !== 52) {
      let currentWeek = this.weeksPast + 1;
      // console.log(`current: ${currentWeek}`);

      week = (
        <Week
          key={`year${this.props.index}week${currentWeek}`}
          index={currentWeek}
          past={false}
        />
      );
      weeks.push(week);
    }

    // future weeks
    for (let i = this.weeksPast + 2; i < num + 1; i++) {
      week = (
        <Week key={`year${this.props.index}week${i}`} index={i} past={false} />
      );
      weeks.push(week);
      // console.log(`future: ${i}`);
    }

    return weeks;
  }

  style: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
  };
}
