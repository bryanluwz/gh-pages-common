import { Component } from "react";
import { Segment } from "../segment";
import { NewsCard, NewsCardWrapper } from "../titleCards";
import Error404Page from "./error404";

export default class DisplayRowPage extends Component {
	render() {
		return (
			<Segment>
				{Object.keys(this.props.dictionary).length === 0 ?
					<Error404Page customWarning="well this is awkward" />
					:
					<NewsCardWrapper>
						{
							Object.keys(this.props.dictionary)
								.map((ModuleDisplayName, index) => {
									var moduleInfo = this.props.dictionary[ModuleDisplayName];
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
		);
	}
}