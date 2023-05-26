import { Component, Fragment } from "react";

import "./NewsCards.css";
import { Link } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export class NewsCard extends Component {
	render() {
		const content = (
			<Fragment>
				{this.props.imgSrc && <img className="title-card-img" src={this.props.imgSrc} alt="err" />}
				<div className="title-card-content">
					<div className="title-card-content-date">{this.props.contentDate}</div>
					{this.props.contentTitle ?
						<div className="title-card-content-title">{this.props.contentTitle}</div> :
						<div className="title-card-content-title">{this.props.contentKey}</div>
					}
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
						<div className="news-card-container" onClick={this.props.onClick}>
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
				{this.props.children?.length > 0 ?
					this.props.children
					:
					<div style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>There ought to be something here</div>
				}

				{
					(this.props.viewMoreLink && this.props.children?.length > 0) &&
					<div className="title-card-button-wrapper">
						<Link to={this.props.viewMoreLink}>
							<button>View more</button>
							<i className="fa" aria-hidden="true" >&#43;</i>
						</Link>
					</div>
				}
			</div >
		);
	}
}

export class NewsView extends Component {
	render() {
		return (
			<Fragment>
				<div className={`news-card-container news-view-container ${this.props.contentTransitionStage}`} onAnimationEnd={this.props.onAnimationEnd}>
					{this.props.imgSrc && <img className="title-card-img" src={this.props.imgSrc} alt="err" />}
					<div className="title-card-content">
						<div className="title-card-content-date">{this.props.lastUpdatedDate}</div>
						{this.props.contentTitle ?
							<div className="title-card-content-title">{this.props.contentTitle}</div> :
							<div className="title-card-content-title">{this.props.contentKey}</div>
						}
						<div className="title-card-content-subtitle">
							<ReactMarkdown children={this.props.contentBody} />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}