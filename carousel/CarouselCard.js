import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class CarouselCard extends Component {
	render() {
		return (
			<Fragment>
				{
					this.props.link ?
						<Link className="carousel-card" to={this.props.link}>
							<img src={process.env.PUBLIC_URL + this.props.imgSrc} alt={this.props.imgAlt} />
						</Link>
						:
						<div className="carousel-card">
							<img src={process.env.PUBLIC_URL + this.props.imgSrc} alt={this.props.imgAlt} />
						</div>
				}
			</Fragment>
		);
	}
}