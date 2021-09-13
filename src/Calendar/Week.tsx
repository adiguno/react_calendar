import React from "react";

type WeekProps = {
	index: number;
};

export class Week extends React.Component<WeekProps, {}> {
	constructor(props: WeekProps) {
		super(props);
	}

	render() {
        // return(<button>{this.props.index}</button>)
		return <input type="radio" />;
	}
}
