import { Component, Fragment } from "react";

import "./NewsCards.css";
import { Link } from "react-router-dom";

export class NewsCard extends Component {
	render() {
		const content = (
			<Fragment>
				<img className="title-card-img" src={this.props.imgSrc} alt="err" />
				<div className="title-card-content">
					<div className="title-card-content-date">{this.props.contentDate}</div>
					<div className="title-card-content-title">{this.props.contentTitle}</div>
					<div className="title-card-content-subtitle">{this.props.contentSubtitle}</div>
				</div>
			</Fragment>
		);

		return (
			<Fragment>
				{
					this.props.link ?
						<Link
							className="news-card-container news-card-container-link"
							to={this.props.link}
							onClick={(evt) => {
								evt.preventDefault();
								window.location.replace(this.props.link);
							}}
						>
							{content}
						</Link>
						:
						<div className="news-card-container">
							{content}
						</div>
				}
			</Fragment>
		);
	}
}

export class NewsCardWrapper extends Component {
	render() {
		return (
			<div className="news-card-wrapper">
				{this.props.children}
				{this.props.viewMoreLink &&
					<div className="title-card-button-wrapper">
						<Link to={this.props.viewMoreLink}>
							<button>View more</button>
							<i className="fa fa-plus" aria-hidden="true" />
						</Link>
					</div>}
			</div>
		);
	}
}