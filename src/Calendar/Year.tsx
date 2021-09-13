import React from "react";
import { Week } from "./Week";

type YearProps = {
	index: number;
};

export class Year extends React.Component<YearProps, {}> {
	constructor(props: YearProps) {
		super(props);
	}

	render() {
		return <div>{this.renderWeeks()}</div>;
	}

	renderWeeks() {
		let weeks = [];
		let week;
		for (let i = 1; i < 53; i++) {
			week = <Week key={i} index={i} />;
			weeks.push(week);
		}
		return weeks;
	}
}
