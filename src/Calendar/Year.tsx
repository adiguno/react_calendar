import React from "react";
import { Week } from "./Week";
import CSS from "csstype";

type YearProps = {
  index: number;
  weeksPast: number;
  pastPresentFuture: string;
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
    if (this.props.pastPresentFuture === "past") {
      for (let i = 1; i < num + 1; i++) {
        week = (
          <Week
            key={`year${this.props.index}week${i}`}
            index={i}
            pastPresentFuture={"past-week"}
          />
        );
        weeks.push(week);
      }
      return weeks;
    } else if (this.props.pastPresentFuture === "future") {
      for (let i = 1; i < num + 1; i++) {
        week = (
          <Week
            key={`year${this.props.index}week${i}`}
            index={i}
            pastPresentFuture={"future-week"}
          />
        );
        weeks.push(week);
      }
    } else {
      // weeks past
      for (let i = 1; i < this.weeksPast + 1; i++) {
        week = (
          <Week
            key={`year${this.props.index}week${i}`}
            index={i}
            pastPresentFuture={"past-week"}
          />
        );
        weeks.push(week);
        // console.log(`past: ${i}`);
      }
      // week present
      let currentWeek = this.weeksPast + 1;
      // console.log(`current: ${currentWeek}`);
      week = (
        <Week
          key={`year${this.props.index}week${currentWeek}`}
          index={currentWeek}
          pastPresentFuture={"present-week"}
        />
      );
      weeks.push(week);

      // weeks future
      for (let i = this.weeksPast + 2; i < num + 1; i++) {
        week = (
          <Week
            key={`year${this.props.index}week${i}`}
            index={i}
            pastPresentFuture={"future-week"}
          />
        );
        weeks.push(week);
        // console.log(`future: ${i}`);
      }
    }

    return weeks;
  }

  // renderWeeks(num: number) {
  //   let weeks = [];
  //   let week;

  //   // past weeks
  //   for (let i = 1; i < this.weeksPast + 1; i++) {
  //     week = (
  //       <Week
  //         key={`year${this.props.index}week${i}`}
  //         index={i}
  //         pastPresentFuture={"past"}
  //       />
  //     );
  //     weeks.push(week);
  //     // console.log(`past: ${i}`);
  //   }

  //   //should check crrent year
  //   // current week
  //   // if (this.weeksPast !== 52) {
  //   //   let currentWeek = this.weeksPast + 1;
  //   //   // console.log(`current: ${currentWeek}`);

  //   //   week = (
  //   //     <Week
  //   //       key={`year${this.props.index}week${currentWeek}`}
  //   //       index={currentWeek}
  //   //       pastPresentFuture={"present"}
  //   //     />
  //   //   );
  //   //   weeks.push(week);
  //   // }
  //   // if (this.props.pastPresentFuture === "present") {
  //   //   let currentWeek = this.weeksPast + 1;

  //   //   week = (
  //   //     <Week
  //   //       key={`year${this.props.index}week${currentWeek}`}
  //   //       index={currentWeek}
  //   //       pastPresentFuture={"present"}
  //   //     />
  //   //   );
  //   //   weeks.push(week);
  //   // }

  //   // future weeks
  //   for (let i = this.weeksPast + 2; i < num + 1; i++) {
  //     week = (
  //       <Week
  //         key={`year${this.props.index}week${i}`}
  //         index={i}
  //         pastPresentFuture={"future"}
  //       />
  //     );
  //     weeks.push(week);
  //     // console.log(`future: ${i}`);
  //   }

  //   return weeks;
  // }

  style: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
  };
}
