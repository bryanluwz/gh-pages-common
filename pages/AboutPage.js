import { Component, Fragment } from "react";
import { TextTitleCard } from "../titleCards";
import { Segment } from "../segment";

export default class AboutPage extends Component {
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
					title={"ABOUT ME"}
					animation={this.props.animation}
				>
					<TextTitleCard
						title={"Hello there"}
						backgroundColor={getNextBackgroundColor()}
						animation={this.props.animation} >
						<div>I'm <b>Bryan Lu</b> from Malaysia, I'm studying Computer Engineering in Singapore</div>
					</TextTitleCard>

					<TextTitleCard
						title={"Education"}
						backgroundColor={getNextBackgroundColor()}
						animation={this.props.animation}>
						<div><b>Nanyang Technological University</b>, Singapore</div>
						<div>Bachelor of Science in <b>Computer Engineering</b></div>
						<div><i>Expected Graduation: July 2025</i></div>
					</TextTitleCard>

					<TextTitleCard
						title={"Skills"}
						backgroundColor={getNextBackgroundColor()}
						animation={this.props.animation} >
						<div>
							<div>
								<b>Programming Languages</b>
								<ul>
									<li>Proficient: HTML, CSS, JavaScript, Python</li>
									<li>Intermediate: C, C++, Java</li>
									<li>Beginner: Rust</li>
								</ul>
							</div>
							<div>
								<b>Frameworks & Tools</b>
								<ul>
									<li>Proficient: ReactJS, NodeJS, ExpressJS, Git</li>
									<li>Intermediate: MongoDB, Microsofy Office Apps</li>
									<li>Beginner: scikit-python, TensorFlow, pytorch</li>
								</ul>
							</div>
							<div>
								<b>Experiences</b>
								<ul>
									<li>Frontend Web Design and Implementation using ReactJS and NodeJS</li>
									<li>Data Analysis and Machine Learning Model Training using scikit-python</li>
									<li>Chrome Extension for scanning QR Code (and other kind of code)</li>
								</ul>
							</div>
						</div>
					</TextTitleCard>

					<TextTitleCard
						title={"Others"}
						backgroundColor={getNextBackgroundColor()}
						animation={this.props.animation} >
						<div>
							<div>
								<b>Interests</b>
								<ul>
									<li>Web development, UI design</li>
									<li>Creating tools to assist in minor everyday inconvenience</li>
								</ul>
							</div>
							<div>
								<b>Hobbies</b>
								<ul>
									<li>Creating fun and wanky programs (Check out the fun section!)</li>
									<li>Playing video games to relax</li>
								</ul>
							</div>
						</div>
					</TextTitleCard>
				</Segment>

				<Segment
					title={"NTU"}
					animation={this.props.animation}
				>
					<TextTitleCard
						title={"NTU is NUTS"}
						backgroundColor={getNextBackgroundColor()}
						animation={this.props.animation} >
						<div>
							<div>Nanyang Technological University offers one of the best education in Singapore, and I'm glad to be given the opportunity to study here.</div>
							<br />
							<div>You would definitely meet the friendliest of people in NTU, and you'll bound to have a wonderful <i>Uni Experience</i> alongside a fantastic curriculum.</div>
						</div>
					</TextTitleCard>
				</Segment>

				<Segment
					title={"WORK"}
					animation={this.props.animation}
				>
					<TextTitleCard
						title={"Resume"}
						backgroundColor={getNextBackgroundColor()}
						animation={this.props.animation} >
						<div>
							<div>Hello I'm currently looking for internship experiences!</div>
							<div>
								Here's my <a
									target="_blank"
									href="https://nbviewer.org/github/bryanluwz/gh-pages-common-public/raw/main/other-assets/Resume.pdf"
									rel="noreferrer"
								>
									<u>resume</u>
								</a>!
							</div>
						</div>
					</TextTitleCard>
				</Segment>
			</Fragment >
		);
	}
}