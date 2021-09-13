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
		return <div>{this.renderWeeks(52)}</div>;
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
}
