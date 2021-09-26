import React from "react";
import "./Week.css";

type WeekStates = {
  past: boolean;
};

type WeekProps = {
  index: number;
  past: boolean;
};

export class Week extends React.Component<WeekProps, WeekStates> {
  constructor(props: WeekProps) {
    super(props);
    this.state = {
      past: this.props.past,
    };
  }

  render() {
    const componentClass = this.props.past ? "past-week" : "future-week";

    return (
      <div className={componentClass}>
        {/* <label>{this.props.index}</label> */}
        <label></label>
      </div>
    );
  }
}
