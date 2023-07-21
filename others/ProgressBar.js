import { Component, createRef } from "react";
import "./ProgressBar.css";

export default class ProgressBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			progress: this.props.progress ? this.props.progress : 0
		};

		this.barRef = createRef();
	}

	setProgress = (progress) => {
		this.setState({ progress: progress }, () => {
			this.barRef.current.style.width = `${progress * 100}%`;
		});
	};

	render() {
		return (
			<div className={`progress-bar-wrapper${this.props.wrapperClass ? this.props.wrapperClass : ""}`}>
				<div className={`progress-bar-container ${this.props.containerClass ? this.props.containerClass : ""}`}>
					<div ref={this.barRef} className={`progress-bar ${this.props.barClass ? this.props.barClass : ""}`}></div>
					{this.props.showNumber && <div className="progress-bar-number">{`${Math.round(this.state.progress * 100)} %`}</div>}
				</div>
			</div>
		);
	}
}