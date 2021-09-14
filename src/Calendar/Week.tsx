import React from "react";
import CSS from "csstype";

type WeekProps = {
  index: number;
};

export class Week extends React.Component<WeekProps, {}> {
  constructor(props: WeekProps) {
    super(props);
  }

  render() {
    return (
      <div style={this.style}>
        {/* <label>{this.props.index}</label> */}
        <label></label>
      </div>
    );
  }

  style: CSS.Properties = {
    height: "20px",
    width: "20px",
    padding: "1px",
    margin: "2px",
    backgroundColor: "rgba(77, 138, 235, 0.85)",
    borderRadius: "5px",
  };
}
