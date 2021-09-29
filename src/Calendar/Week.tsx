import React from "react";
import "./Week.css";

type WeekStates = {
  past: boolean;
};

type WeekProps = {
  index: number;
  pastCurrentFuture: string;
};

export class Week extends React.Component<WeekProps, WeekStates> {
  constructor(props: WeekProps) {
    super(props);
    // this.state = {
    //   past: this.props.pastPresentFuture,
    // };
  }

  render() {
    const componentClass = this.getClass();

    return (
      <div className={componentClass}>
        {/* <label>{this.props.index}</label> */}
        <label></label>
      </div>
    );
  }

  getClass(): string {
    if (this.props.pastCurrentFuture === "past-week") {
      return "past-week";
    }
    if (this.props.pastCurrentFuture === "future-week") {
      return "future-week";
    }
    return "current-week";
  }
}
