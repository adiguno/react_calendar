import { NONAME } from "dns";
import React, { CSSProperties } from "react";

type WeekProps = {
	index: number;
};

export class Week extends React.Component<WeekProps, {}> {
	constructor(props: WeekProps) {
		super(props);
	}

	render() {
		return (
			<label style={this.labelStyle}>
				<input type="radio" className="demo" style={this.inputStyle} />
				<span style={this.spanStyle}>a</span>
			</label>
		);
		// return(<button>{this.props.index}</button>)
		return <input type="radio" />;
	}

	inputStyle: CSSProperties = {
		display: "none",
	};
	labelStyle: CSSProperties = {
		display: "inline-block",
		padding: "5px 10px",
		cursor: "pointer",
	};
	spanStyle: CSSProperties = {
		position: "relative",
	};
}
