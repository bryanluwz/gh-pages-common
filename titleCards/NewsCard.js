import { Component, Fragment, createRef } from "react";

import "./NewsCards.css";
import { Link } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Fade from 'react-reveal/Fade';

export class NewsCard extends Component {
	constructor(props) {
		super(props);
		this.ref = createRef();
	}

	scrollIntoView = () => {
		this.ref.current.scrollIntoView({ behavior: 'smooth' });
	};

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
			this.props.link ?
				<Link
					ref={this.ref}
					className={`news-card-container news-card-container-link ${this.props.isSelected ? "news-card-container-highlighted" : ""}`}
					to={this.props.link}
					target="_blank"
					rel="noreferrer"
					style={this.props.style}
					onClick={
						this.props.onClick ?
							this.props.onClick :
							(evt) => {
								evt.preventDefault();
								window.location.replace(this.props.link);
							}}
				>
					{content}
				</Link>
				:
				<div
					ref={this.ref}
					className={`news-card-container ${this.props.isSelected ? "news-card-container-highlighted" : ""}`}
					style={this.props.style}
					onClick={this.props.onClick}
				>
					{content}
				</div>

		);
	}
}

export class NewsCardWrapper extends Component {
	render() {
		const returnChildrenHtml =
			this.props.children?.length > 0 ?
				this.props.children.map((child, index) => {
					return (
						this.props.animation ?
							<Fade key={index} {...this.props}>{child}</Fade> :
							child
					);
				})
				:
				<div style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>There ought to be something here</div>;


		return (
			<div className="news-card-wrapper">
				{returnChildrenHtml}

				{
					(this.props.viewMoreLink && this.props.children?.length > 0) &&
					<div className="title-card-button-wrapper">
						{this.props.animation ?
							<Fade {...this.props}>
								<Link to={this.props.viewMoreLink}>
									<button>View more</button>
									<i className="fa" aria-hidden="true" >&#43;</i>
								</Link>
							</Fade> :
							<Link to={this.props.viewMoreLink}>
								<button>View more</button>
								<i className="fa" aria-hidden="true" >&#43;</i>
							</Link>
						}
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
					{this.props.imgSrc &&
						(this.props.imgLink ?
							<Link
								to={this.props.imgLink}
								target="_blank"
								rel="noreferrer"
								onClick={(evt) => {
									evt.preventDefault();
									window.location.replace(this.props.imgLink);
								}}>
								<img className="title-card-img" src={this.props.imgSrc} alt="idk" />
							</Link>
							:
							<div className="title-card-img-container">
								<img className="title-card-img" src={this.props.imgSrc} alt="idk" />
							</div>)
					}
					<div className="title-card-content">
						{!this.props.isSmallView && (this.props.contentTitle ?
							<div className="title-card-content-title">{this.props.contentTitle}</div> :
							<div className="title-card-content-title">{this.props.contentKey}</div>)
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