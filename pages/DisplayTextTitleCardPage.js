import { Component, Fragment } from "react";
import { Segment } from "../segment";
import { TextTitleCard } from "../titleCards";
export default class DisplayTextTitleCardPage extends Component {
	constructor(props) {
		super(props);
		this.bgColors = [
			"var(--teal-pastel-1)",
			"var(--blue-pastel-1)",
			"var(--pink-pastel-1)",
			"var(--yellow-pastel-1)"
		];

		this.pageDictionary = this.props.pageDictionary;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.pageDictionary !== this.props.pageDictionary) {
			this.pageDictionary = this.props.pageDictionary;
			this.forceUpdate();
		}
	}

	render() {
		var bgColorsIndex = 0;
		const bgColors = this.bgColors;

		function getNextBackgroundColor() {
			var bgColor = bgColors[bgColorsIndex];
			bgColorsIndex = (bgColorsIndex + 1) % bgColors.length;
			return bgColor;
		};

		return (
			<Fragment>
				{
					this.pageDictionary?.map((segment, index) => {
						return (
							<Segment
								key={index}
								title={segment['segment-title']}
								animation={this.props.animation}
							>
								{segment['title-card']?.map((titleCard, index) => {
									return (
										<TextTitleCard key={index} title={titleCard['title']} backgroundColor={getNextBackgroundColor()} htmlString={titleCard['html']} {...this.props}>
											{titleCard['html']}
										</TextTitleCard>);
								})
								}

							</Segment>
						);
					})
				}
				{this.props.children}
			</Fragment>
		);
	}
}