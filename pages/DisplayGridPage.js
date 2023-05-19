import { Component } from "react";
import { Segment } from "../segment";
import { GridTitleCard, GridTitleCardWrapper } from "../titleCards";
import Error404Page from "./error404";

export default class DisplayGridPage extends Component {
	constructor(props) {
		super(props);
		this.bgColors = [
			"var(--teal-pastel-1)",
			"var(--blue-pastel-1)",
			"var(--pink-pastel-1)",
			"var(--yellow-pastel-1)"
		];
		this.previousBgColor = -1;
	}

	randomBgColor = () => {
		var nextBgColor = this.previousBgColor;
		while (nextBgColor === this.previousBgColor) {
			nextBgColor = Math.floor((Math.random() * 69420) % this.bgColors.length);
		}
		this.previousBgColor = nextBgColor;
		return this.bgColors[nextBgColor];
	};

	render() {
		return (
			<Segment>
				{Object.keys(this.props.dictionary).length === 0 ?
					<Error404Page customWarning="well this is awkward" />
					:
					<GridTitleCardWrapper
						minElemSize={'140px'}
						maxElemSize={'1fr'}
					>
						{
							Object.keys(this.props.dictionary)
								.map((ModuleDisplayName, index) => {
									var moduleInfo = this.props.dictionary[ModuleDisplayName];
									var routeLink = moduleInfo.routeLink;
									return (
										< GridTitleCard
											key={index}
											link={routeLink}
											imgSrc={moduleInfo.icon}
											title={moduleInfo.displayName}
											backgroundColor={this.randomBgColor()}
										/>
									);
								})
						}
					</GridTitleCardWrapper>}
			</Segment>
		);
	}
}