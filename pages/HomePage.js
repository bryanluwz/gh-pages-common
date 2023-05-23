import { Component, Fragment } from "react";
import '../carousel/Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

import { CarouselCard, CarouselCardWrapper } from "../carousel";
import { Segment } from "../segment";
import { ImageTextTitleCard, NewsCard, NewsCardWrapper } from "../titleCards";

export default class HomePage extends Component {
	render() {
		return (
			<Fragment>
				{/* Carousel */}
				<CarouselCardWrapper>
					<CarouselCard
						isLink={true}
						link={"/fun-stuff"}
						imgSrc={"./images/testimg1.webp"}
						imgAlt={"nil"}
					/>
					<CarouselCard
						isLink={false}
						link={""}
						imgSrc={"./images/testimg2.webp"}
						imgAlt={"nil"}
					/>
				</CarouselCardWrapper>

				{/* Segment -- Hello there */}
				<Segment
					title={"about"}
				>
					<ImageTextTitleCard
						imgSrc={"./images/shuba.png"}
						title={"Oh, hey~~"}
					>
						<span>Didn't see you there!</span>
						<br />
						<span>Welcome to my website • ω •</span>
						<br />
						<Link to={"/about"}><u>Want to know more?</u></Link>
					</ImageTextTitleCard>
				</Segment>

				{/* Segment - Fun stuff */}
				<Segment
					title={"Funsies"}
				>
					{Object.keys(this.props.gameDictionary).length === 0 ?
						<span style={{ textAlign: "center", marginBottom: "20px" }}>There ought to be something here</span>
						:
						<NewsCardWrapper
							viewMoreLink={"fun-stuff"}
						>
							{
								Object.keys(this.props.gameDictionary)
									.slice(0, Math.min(Object.keys(this.props.gameDictionary).length, 4))
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
					}
				</Segment>

				{/* Segment - uni */}
				<Segment
					title={"uni"}
				>
					{Object.keys(this.props.uniDictionary).length === 0 ?
						<span style={{ textAlign: "center", marginBottom: "20px" }}>There ought to be something here</span>
						:
						<NewsCardWrapper
							viewMoreLink={"fun-stuff"}
						>
							{
								Object.keys(this.props.gameDictionary)
									.slice(0, Math.min(Object.keys(this.props.gameDictionary).length, 4))
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
					}
				</Segment>
			</Fragment>
		);
	}
} 