import { Component } from "react";
import { Link } from "react-router-dom";

export default class ContentDisplay extends Component {
	render() {
		return (
			<div className="content-segment" style={this.props.style}>
				<div className="content-header">
					<Link to={this.props.backButtonRoute}>
						<i
							className="content-header-side-button fa fa-angle-left"
							ria-hidden="true" />
					</Link>
					<div
						className="content-header-title"
						onClick={() => { this.props.handleHeaderTitleClick ? this.props.handleHeaderTitleClick() : console.log("this button does nothing"); }}>
						{this.props.displayName}
					</div>
					<i
						className={`content-header-side-button fa ${this.props.faIcon ? this.props.faIcon : "fa-trash"}`}
						aria-hidden="true"
						style={{ visibility: this.props.displayClearHistory ? "inherit" : "hidden" }}
						onClick={() => { this.props.handleDeleteHistoryButton ? this.props.handleDeleteHistoryButton() : console.log("this button does nothing"); }} />
				</div>
				<div className={`content-wrapper ${this.props.contentBodyAdditionalClasses.join(' ')}`}>
					{this.props.children}
				</div>
			</div>
		);
	}
}