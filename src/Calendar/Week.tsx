import React, { useState } from "react";
import { addFeedback } from "./EmailList";
import FeedbackDialog from "./FeedbackDialog";
import "./Week.css";

type WeekStates = {
  // openDialog: boolean;
};

type WeekProps = {
  index: number;
  pastCurrentFuture: string;
};

export class Week extends React.Component<WeekProps, WeekStates> {
  // openDialog: boolean;
  // setOpenDialog: Function;
  constructor(props: WeekProps) {
    super(props);

    // [this.openDialog, this.setOpenDialog] = useState<boolean>(false);

    // this.state = {
    //   openDialog: false,
    // };
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }
  handleClickOpen() {
    console.log("clicking open");
    // this.setOpenDialog(true);
    // this.state = {
    //   openDialog: true,
    // };
  }
  handleClickClose() {
    // this.state = {
    //   openDialog: false,
    // };
  }

  render() {
    const componentClass = this.getClass();

    return (
      // onClick={addFeedback}
      <div className={componentClass}>
        {/* <label>{this.props.index}</label> */}
        <label onClick={this.handleClickOpen}>
          {/* <FeedbackDialog open={true} onClose={this.handleClickClose} /> */}
        </label>
        {/* <FeedbackDialog
          open={this.state.openDialog}
          onClose={this.handleClickClose}
        /> */}
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
