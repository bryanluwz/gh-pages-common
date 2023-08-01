import { Component, Fragment } from "react";
import { TextTitleCard } from "../titleCards";
import { Segment } from "../segment";
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
					title={"Arigatou"}
					animation={this.props.animation}
				>
					<TextTitleCard
						title={"Thanks Internet"}
						backgroundColor={getNextBackgroundColor()}
						animation={this.props.animation} >
						<div>
							Thanks for all the reference images I've used on this website, I've lost track of where I got them from, but I'm sure I got them from somewhere on the internet.
						</div>
					</TextTitleCard>

					<TextTitleCard
						title={"Thanks Pusheen"}
						backgroundColor={getNextBackgroundColor()}
						animation={this.props.animation} >
						<div>
							Thanks to <u><a href="https://pusheen.com" target="_blank" rel="noreferrer">pusheen.com</a></u> for the inspiration for the website's theme.
						</div>
					</TextTitleCard>

					<TextTitleCard
						title={"Thanks ChatGPT"}
						backgroundColor={getNextBackgroundColor()}
						animation={this.props.animation} >
						<div>
							Thanks to <u><a href="https://chat.openai.com" target="_blank" rel="noreferrer">ChatGPT</a></u> for answering my dumb questions, and also for not answering my dumb questions.
						</div>
					</TextTitleCard>

					<TextTitleCard
						title={"Thanks multi.tech"}
						backgroundColor={getNextBackgroundColor()}
						animation={this.props.animation} >
						<div>
							Thanks to <u><a href="https://multi.tech" target="_blank" rel="noreferrer">multi.tech</a></u> for providing my a GPT model to play with.
						</div>
					</TextTitleCard>

					<TextTitleCard
						title={"And Thank You"}
						backgroundColor={getNextBackgroundColor()}
						animation={this.props.animation} >
						<div>
							Thank you for visiting this website :3
						</div>
					</TextTitleCard>
				</Segment>

				<Segment
					title={"Information"}
					animation={this.props.animation}
				>
					<TextTitleCard
						title={"Cookies"}
						backgroundColor={getNextBackgroundColor()}
						animation={this.props.animation} >
						<div>
							<div>Just like real-life cookies, our cookies does not last forever, and will only be extended every time you come and visit.</div>
							<br />
							<div><i>No cookies consent button?? That's probably just your browser blocking.</i></div>
							<br />
							<div>If you don't want the cookies anymore, please click on the <b><i>cookie diet</i></b> button below.</div>
						</div>
					</TextTitleCard>

					<TextTitleCard
						title={"Funsies"}
						backgroundColor={getNextBackgroundColor()}
						animation={this.props.animation} >
						<div>
							Each game is hosted on a separate GitHub Page, so don't worry when you are being redirected to another page.
						</div>
					</TextTitleCard>

					<TextTitleCard
						title={"Sauce"}
						backgroundColor={getNextBackgroundColor()}
						animation={this.props.animation} >
						<div>
							Wonder how this website is made? Here's the <u><a href="https://github.com/bryanluwz/bryanluwz.github.io" target="_blank" rel="noreferrer">sauce</a></u>!
						</div>
					</TextTitleCard>
				</Segment>

				<Segment
					title="buttons!"
					animation={this.props.animation}>
					<AmnesiaButton router={this.props.router} buttonName={"cookie diet"} confirmName={"you sure?"} />
				</Segment>
			</Fragment>
		);
	}
}