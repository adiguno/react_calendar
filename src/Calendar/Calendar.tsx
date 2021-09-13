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
		console.log(props);
	}
	state: CalendarState = {
		startDate: 0,
	};

	renderYears() {
		let years = [];
		let year;
		for (let i = 1; i < 101; i++) {
			year = <Year index={i} />;
			years.push(year);
		}
		return years;
	}

	render() {
		const hundredYears = this.renderYears();

		return <div>{hundredYears}</div>;
	}
}
