import * as React from "react";
import { Year } from "./Year";

type CalendarState = {
	startDate: number;
};
type CalendarProps = {
	startDate: number;
};

export class Calendar extends React.Component<CalendarProps, CalendarState> {
	constructor(props: CalendarProps) {
		super(props);
	}
	state: CalendarState = {
		startDate: 0,
	};

	renderYears(num: number) {
		let years = [];
		let year;
		for (let i = 1; i < num + 1; i++) {
			year = <Year key={`year${i}`} index={i} />;
			years.push(year);
		}
		return years;
	}

	render() {
		const hundredYears = this.renderYears(100);
		return (
			<div>
				<h1>Your Calendar</h1>
				<div>{hundredYears}</div>
			</div>
		);
	}
}
