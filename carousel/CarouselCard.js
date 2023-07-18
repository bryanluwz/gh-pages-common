import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

export class CarouselCard extends Component {
	render() {
		return (
			<Fragment>
				{
					this.props.link ?
						<Link
							className="carousel-card"
							to={this.props.link}
							onClick={(evt) => {
								evt.preventDefault();
								window.location.replace(this.props.link);
							}}>
							<img src={this.props.imgSrc} alt={this.props.imgAlt} />
						</Link>
						:
						<div className="carousel-card">
							<img src={this.props.imgSrc} alt={this.props.imgAlt} />
						</div>
				}
			</Fragment>
		);
	}
}

export class CarouselCardWrapper extends Component {
	render() {
		return (
			<div className="carousel-main-container">
				<Carousel
					showArrows={true}
					showStatus={false}
					showIndicators={false}
					autoPlay={true}
					infiniteLoop={true}
					emulateTouch
					swipeable
					stopOnHover={false}
					interval={3500}
					transitionTime={500}
					showThumbs={false}

					renderArrowPrev={(clickHandler, hasPrev) => {
						return (
							<button
								className={"control-arrow-custom control-prev-custom"}
								aria-label="previous slide / item"
								onClick={clickHandler}
							>
								<i className="fa fa-angle-left control-arrow-icon fa-2x" aria-hidden="true"></i>
							</button>
						);
					}}

					renderArrowNext={(clickHandler, hasPrev) => {
						return (
							<button
								className={"control-arrow-custom control-next-custom"}
								aria-label="next slide / item"
								onClick={clickHandler}
							>
								<i className="fa fa-angle-right control-arrow-icon fa-2x" aria-hidden="true"></i>
							</button>
						);
					}}

					className="carousel-container">
					{this.props.children}
				</Carousel>
			</div>
		);
	}
}