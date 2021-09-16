import React from "react";
import CSS from "csstype";

type WeekProps = {
  index: number;
  past: boolean;
};

export class Week extends React.Component<WeekProps, {}> {
  constructor(props: WeekProps) {
    super(props);
  }

  render() {
    if (this.props.past) {
      return (
        <div style={this.pastStyle}>
          {/* <label>{this.props.index}</label> */}
          <label></label>
        </div>
      );
    }

    return (
      <div style={this.style}>
        {/* <label>{this.props.index}</label> */}
        <label></label>
      </div>
    );
  }

  style: CSS.Properties = {
    cursor: "pointer",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // margin: "auto auto",
    marginTop: "2.5px",
    marginBottom: "2.5px",
    marginLeft: "auto",
    marginRight: "auto",
    // lineHeight: "20px",

    height: "20px",
    width: "20px",

    // paddingBottom: "5px",
    padding: "1px",
    // margin: "2px",
    backgroundColor: "rgba(77, 138, 235, 0.85)",
    borderRadius: "5px",
  };
  pastStyle: CSS.Properties = {
    cursor: "pointer",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // margin: "auto auto",
    marginTop: "2.5px",
    marginBottom: "2.5px",
    marginLeft: "auto",
    marginRight: "auto",
    // lineHeight: "20px",

    height: "20px",
    width: "20px",

    // paddingBottom: "5px",
    padding: "1px",
    // margin: "2px",
    backgroundColor: "rgba(90, 3, 252, 0.85)",
    borderRadius: "5px",
  };
}
