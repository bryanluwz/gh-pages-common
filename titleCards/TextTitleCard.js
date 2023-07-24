import { Component } from "react";
import Fade from 'react-reveal/Fade';

import './TitleCards.css';

export class ImageTextTitleCard extends Component {
	render() {
		const returnHtml =
			<div className="image-text-title-card-container">
				<img className="image-text-title-card-img" src={process.env.PUBLIC_URL + this.props.imgSrc} alt="idk" />
				<div className="image-text-title-card-text">
					<div className="image-text-title-card-text-title">
						{this.props.title}
					</div>
					<div className="image-text-title-card-text-subtitle">
						{this.props.children}
					</div>
				</div>
			</div>;

		return (
			this.props.animation ? <Fade {...this.props}>{returnHtml}</Fade> : returnHtml
		);
	}
}

export class TextTitleCard extends Component {
	render() {
		const returnHtml = <div className="image-text-title-card-container" style={{ backgroundColor: this.props.backgroundColor }}>
			<div className="image-text-title-card-text text-title-card-content">
				<div className="image-text-title-card-text-title">
					{this.props.title}
				</div>
				{
					this.props.htmlString ?
						<div className="image-text-title-card-text-subtitle" dangerouslySetInnerHTML={{ __html: this.props.htmlString }} /> :
						<div className="image-text-title-card-text-subtitle" >
							{this.props.children}
						</div>
				}
			</div>
		</div>;

		return (
			this.props.animation ? <Fade {...this.props}>{returnHtml}</Fade> : returnHtml
		);
	}
}