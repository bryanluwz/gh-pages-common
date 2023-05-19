import { Component } from "react";
import { Link } from "react-router-dom";

import './TitleCards.css';

export class GridTitleCardWrapper extends Component {
	render() {
		return (
			<div className="grid-title-cards-wrapper">
				<div
					className="grid-title-cards-container"
					style={{
						gridTemplateColumns: `repeat(auto-fit, minmax(${this.props.minElemSize}, ${this.props.maxElemSize}))`
					}}
				>
					{this.props.children}
				</div>
				{
					this.props.withViewMore &&
					<Link
						className="grid-title-card-view-more-button"
						to={this.props.viewMoreLink}
					>
						view moar
					</Link>
				}
			</div >
		);
	}
}

export class GridTitleCard extends Component {
	render() {
		return (
			<div
				className="grid-title-card"
			>
				<div
					style={{ cursor: "pointer" }}
					onClick={() => { window.location.replace(this.props.link); }}
				>
					<img
						className="grid-title-card-img grid-title-card-bg-color"
						style={{
							backgroundColor: this.props.backgroundColor
						}}
						src={process.env.PUBLIC_URL + this.props.imgSrc}
						alt="idk" />
				</div>
				<div
					className="grid-title-card-title"
					style={{ cursor: "pointer" }}
					onClick={() => { window.location.replace(this.props.link); }}
				>
					{this.props.title}
				</div>
			</div >
		);
	}
}

export class GridTitleCardTextless extends Component {
	render() {
		return (
			<div
				className="grid-title-card"
			>
				<Link
					to={this.props.link}>
					<img className={`grid-title-card-img ${this.props.withBackground && "grid-title-card-bg-color"}`} src={this.props.imgSrc} alt="idk" />
				</Link>
			</div >
		);
	}
}