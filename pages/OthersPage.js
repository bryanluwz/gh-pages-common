import { Component, Fragment } from "react";
import { Segment } from "../segment";
import { TextTitleCard } from "../titleCards";
import { Link } from "react-router-dom";
import { AmnesiaButton } from "../others";

export default class OthersPage extends Component {
	constructor(props) {
		super(props);
		this.bgColors = [
			"var(--teal-pastel-1)",
			"var(--blue-pastel-1)",
			"var(--pink-pastel-1)",
			"var(--yellow-pastel-1)"
		];
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
				<Segment
					title='arigatou'
				>
					<TextTitleCard title="Reference Images" backgroundColor={getNextBackgroundColor()}>
						<ol style={{ listStyleType: 'decimal', margin: 0 }}>
							<li style={{ paddingLeft: "5px" }}>Not done yet</li>
							<li style={{ paddingLeft: "5px" }}>Not done yet</li>
						</ol>
					</TextTitleCard>

					<TextTitleCard title="Pusheen" backgroundColor={getNextBackgroundColor()}>
						<span>Thanks to <u><Link to={"https://pusheen.com"}>pusheen.com</Link></u> for inspiration <i>(and also i used some of the images there as placeholder images {">_<"})</i></span>
					</TextTitleCard>

					<TextTitleCard title="ChatGPT" backgroundColor={getNextBackgroundColor()}>
						<span>Thanks to <u><Link to={"https://chat.openai.com"}>chatgpt</Link></u> for being there <i>(and also not being there)</i> when i needed you the most</span>
					</TextTitleCard>
				</Segment>

				<Segment title="information">
					<TextTitleCard title="Cookies" backgroundColor={getNextBackgroundColor()}>
						<span>Just like real-life cookies, our cookies does not last forever, and will only be extended every time you come and visit.</span>
						<br /><br />
						<span>If you don't want the cookies anymore, please click on the <b><i>cookie diet</i></b> button below.</span>
					</TextTitleCard>
					<TextTitleCard title="Funsies" backgroundColor={getNextBackgroundColor()}>
						<span>Each game is hosted on a separate page, so don't worry when you are being redirected to another page.</span>
					</TextTitleCard>
				</Segment>

				<Segment title="buttons!">
					<AmnesiaButton router={this.props.router} buttonName={"cookie diet"} confirmName={"you sure?"} />
				</Segment>
			</Fragment >
		);
	}
}