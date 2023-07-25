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
					animation={true}
				>
					<ImageTextTitleCard
						imgSrc={miscDictionary?.aboutSection.imgSrc}
						title={"Oh, hey~~"}
						animation={true}
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
					animation={true}
				>
					<NewsCardWrapper
						viewMoreLink={"news"}
						animation={true}
					>
						{this.props.newsDictionary &&
							Object.keys(this.props.newsDictionary)
								.slice(0, Math.min(Object.keys(this.props.gameDictionary).length, this.maxCardPerSegment))
								.map((NewsKey, index) => {
									var news = this.props.newsDictionary[NewsKey];
									return (
										<NewsCard
											key={index}
											contentKey={NewsKey}
											contentTitle={news.contentTitle}
											contentSubtitle={news.contentSubtitle}
											contentBody={news.contentBody}
											contentDate={news.lastUpdatedDate}
											link={`/news/:${NewsKey}`}
											onClick={() => { ; }}
										/>
									);
								})
						}
					</NewsCardWrapper>
				</Segment>

				{/* Segment - Fun stuff */}
				<Segment
					title={"Funsies"}
					animation={true}
				>
					<NewsCardWrapper
						viewMoreLink={"fun-stuff"}
						animation={true}
					>
						{
							this.props.gameDictionary &&
							Object.keys(
								Object.fromEntries(
									Object.entries(this.props.gameDictionary)
										.sort(([, objA], [, objB]) => {
											var objADate = new Date(objA.lastUpdatedDate);
											var objBDate = new Date(objB.lastUpdatedDate);
											return objBDate - objADate;
										})
								)
							)
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

				{/* Segment - coding */}
				<Segment
					title={"code"}
					animation={true}
				>
					<NewsCardWrapper
						viewMoreLink={"coding-stuff"}
						left
					>
						{
							this.props.codingDictionary &&
							Object.keys(
								Object.fromEntries(
									Object.entries(this.props.codingDictionary)
										.sort(([, objA], [, objB]) => {
											var objADate = new Date(objA.lastUpdatedDate);
											var objBDate = new Date(objB.lastUpdatedDate);
											return objBDate - objADate;
										}
										)))
								.slice(0, Math.min(Object.keys(this.props.codingDictionary).length, this.maxCardPerSegment))
								.map((ModuleDisplayName, index) => {
									var moduleInfo = this.props.codingDictionary[ModuleDisplayName];
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

				{/* Segment - Extra stuff */}
				<Segment
					title={"Extras"}
					animation={true}
				>
					<NewsCardWrapper
						viewMoreLink={"extra-stuff"}
						animation={true}
					>
						{
							this.props.extrasDictionary &&
							Object.keys(
								Object.fromEntries(
									Object.entries(this.props.extrasDictionary)
										.sort(([, objA], [, objB]) => {
											var objADate = new Date(objA.lastUpdatedDate);
											var objBDate = new Date(objB.lastUpdatedDate);
											return objBDate - objADate;
										})
								)
							)
								.slice(0, Math.min(Object.keys(this.props.extrasDictionary).length, this.maxCardPerSegment))
								.map((ModuleDisplayName, index) => {
									var moduleInfo = this.props.extrasDictionary[ModuleDisplayName];
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