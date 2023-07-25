import { Component } from "react";

import "./Segment.css";
import { Fade } from "react-reveal";

export default class Segment extends Component {
	render() {
		const returnHtml = <div className="segment-container">
			{this.props.title !== undefined && <div className="segment-header">
				<span className="segment-header-title-padding"></span>
				<span className="segment-header-title">
					{this.props.title}
				</span>
				<span className="segment-header-title-padding"> </span>
			</div>}
			<div className="segment-body" style={this.props.segmentBodyStyle}>
				{this.props.children}
			</div>
		</div>;

		return (
			this.props.animation ?
				<Fade {...this.props}>
					{returnHtml}
				</Fade>
				:
				returnHtml
		);
	}
}