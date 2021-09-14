import React from "react";
import { Week } from "./Week";
import CSS from "csstype";

type YearProps = {
  index: number;
};

export class Year extends React.Component<YearProps, {}> {
  constructor(props: YearProps) {
    super(props);
  }

  render() {
    return <div style={this.style}>{this.renderWeeks(52)}</div>;
  }

  renderWeeks(num: number) {
    let weeks = [];
    let week;
    for (let i = 1; i < num + 1; i++) {
      week = <Week key={`week${i}`} index={i} />;
      weeks.push(week);
    }
    return weeks;
  }

  style: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
  };
}
