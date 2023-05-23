import { Component, Fragment } from "react";
import { Segment } from "../segment";
import { NewsCard, NewsCardWrapper } from "../titleCards";
import Error404Page from "./error404";
import { Searchbar } from "../others";

export default class DisplayRowPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortedDictionary: { ...this.props.dictionary }
		};
	}

	setSortedDictionary = (sorted) => {
		this.setState({
			sortedDictionary: sorted
		});
	};

	render() {
		const { sortedDictionary } = this.state;
		return (
			<Segment>
				{Object.keys(sortedDictionary).length === 0 ?
					<Error404Page customWarning="well this is awkward" />
					:
					<Fragment>
						<Searchbar
							placeholder={"Search"}
							dictionary={sortedDictionary}
							setSortedDictionary={this.setSortedDictionary}
						/>
						<NewsCardWrapper>
							{
								Object.keys(sortedDictionary)
									.map((ModuleDisplayName, index) => {
										var moduleInfo = sortedDictionary[ModuleDisplayName];
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
					</Fragment>
				}
			</Segment>
		);
	}
}