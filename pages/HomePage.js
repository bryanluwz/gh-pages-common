import { Component, Fragment } from "react";
import '../carousel/Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

import { CarouselCard, CarouselCardWrapper } from "../carousel";
import { Segment } from "../segment";
import { ImageTextTitleCard, NewsCard, NewsCardWrapper } from "../titleCards";

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.maxCardPerSegment = 3;
	}

	render() {
		const carouselDictionary = this.props.carouselDictionary;
		const miscDictionary = this.props.miscDictionary;
		return (
			<Fragment>
				{/* Carousel */}
				{carouselDictionary && Object.keys(carouselDictionary)?.length > 0 ?
					<CarouselCardWrapper>
						{
							Object.keys(carouselDictionary).map((carouselKey, index) => {
								return (
									<CarouselCard
										key={index}
										link={carouselDictionary[carouselKey].link}
										imgSrc={carouselDictionary[carouselKey].imgSrc}
										alt={"nil"}
									/>
								);
							})
						}
					</CarouselCardWrapper>
					:
					<Fragment />
				}

				{/* Segment -- Hello there */}
				<Segment
					title={"about"}
				>
					<ImageTextTitleCard
						imgSrc={miscDictionary?.aboutSection.imgSrc}
						title={"Oh, hey~~"}
					>
						<span>Didn't see you there!</span>
						<br />
						<span>Welcome to my website • ω •</span>
						<br />
						<Link to={"/about"}><u>Want to know more?</u></Link>
					</ImageTextTitleCard>
				</Segment>

				{/* Segment - News */}
				<Segment
					title={"News"}
				>
					<NewsCardWrapper
						viewMoreLink={"news"}
					>
						{this.props.newsDictionary &&
							Object.keys(this.props.newsDictionary)
								.slice(0, Math.min(Object.keys(this.props.gameDictionary).length, this.maxCardPerSegment))
								.map((ModuleDisplayName, index) => {
									var moduleInfo = this.props.gameDictionary[ModuleDisplayName];
									var routeLink = moduleInfo.routeLink;
									return (
										<NewsCard
											key={index}
											link={routeLink}
											imgSrc={moduleInfo.icon}
											contentTitle={moduleInfo.displayName}
											contentSubtitle={moduleInfo.subtitle}
											contentDate={moduleInfo.lastUpdatedDate}
										/>
									);
								})
						}
					</NewsCardWrapper>
				</Segment>

				{/* Segment - Fun stuff */}
				<Segment
					title={"Funsies"}
				>
					<NewsCardWrapper
						viewMoreLink={"fun-stuff"}
					>
						{
							this.props.gameDictionary &&
							Object.keys(this.props.gameDictionary)
								.slice(0, Math.min(Object.keys(this.props.gameDictionary).length, this.maxCardPerSegment))
								.map((ModuleDisplayName, index) => {
									var moduleInfo = this.props.gameDictionary[ModuleDisplayName];
									var routeLink = moduleInfo.routeLink;
									return (
										<NewsCard
											key={index}
											link={routeLink}
											imgSrc={moduleInfo.icon}
											contentTitle={moduleInfo.displayName}
											contentSubtitle={moduleInfo.subtitle}
											contentDate={moduleInfo.lastUpdatedDate}
										/>
									);
								})
						}
					</NewsCardWrapper>
				</Segment>

				{/* Segment - uni */}
				<Segment
					title={"uni"}
				>
					<NewsCardWrapper
						viewMoreLink={"uni-stuff"}
					>
						{
							this.props.uniDictionary &&
							Object.keys(this.props.uniDictionary)
								.slice(0, Math.min(Object.keys(this.props.uniDictionary).length, this.maxCardPerSegment))
								.map((ModuleDisplayName, index) => {
									var moduleInfo = this.props.uniDictionary[ModuleDisplayName];
									var routeLink = moduleInfo.routeLink;
									return (
										<NewsCard
											key={index}
											link={routeLink}
											imgSrc={moduleInfo.icon}
											contentTitle={moduleInfo.displayName}
											contentSubtitle={moduleInfo.subtitle}
											contentDate={moduleInfo.lastUpdatedDate}
										/>
									);
								})
						}
					</NewsCardWrapper>
				</Segment>
			</Fragment>
		);
	}
} 