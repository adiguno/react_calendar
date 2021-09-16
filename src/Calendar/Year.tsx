import React from "react";
import { Week } from "./Week";
import CSS from "csstype";

type YearProps = {
  index: number;
  past: boolean;
  weeksPast: number;
};

export class Year extends React.Component<YearProps, {}> {
  weeksPast: number;
  constructor(props: YearProps) {
    super(props);
    if (this.props.past) {
      this.weeksPast = 52;
    } else {
      this.weeksPast = this.props.weeksPast;
    }
  }

  render() {
    return <div style={this.style}>{this.renderWeeks(52)}</div>;
  }

  renderWeeks(num: number) {
    let weeks = [];
    let week;
    // for (let i = 1; i < num + 1; i++) {
    for (let i = 1; i < this.weeksPast + 1; i++) {
      week = <Week key={`week${i}`} index={i} past={true} />;
      weeks.push(week);
    }
    //missing current week

    for (let i = this.weeksPast + 1; i < num + 1; i++) {
      week = <Week key={`week${i}`} index={i} past={false} />;
      weeks.push(week);
    }

    return weeks;
  }

  style: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
  };
}
