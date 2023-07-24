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

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.dictionary !== this.props.dictionary) {

			this.setState({
				sortedDictionary: { ...this.props.dictionary }
			});
		}
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
					<Error404Page imgSrc={this.props.error404ImgSrc} customWarning="well this is awkward" />
					:
					<Fragment>
						<Searchbar
							placeholder={"Search"}
							sortedDictionary={this.props.sortedDictionary}
							originalDictionary={this.props.dictionary}
							setSortedDictionary={this.setSortedDictionary}
							haveSortButton={true}
							sortOptions={{ "A-Z": "A-Z", "Z-A": "Z-A" }}
							sortOption={"A-Z"}
						/>
						<NewsCardWrapper
							{...this.props}
						>
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