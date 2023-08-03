import { Component } from "react";
import "./SVGAnimation.css";

export default class SVGAnimation extends Component {
	componentDidMount() {
		this.resizeSVG();
		window.addEventListener("resize", this.resizeSVG);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.resizeSVG);
	}

	resizeSVG = () => {
		const svg = document.getElementById("header-title");
		const text = document.getElementById("header-title-text");

		if (svg && text) {
			const bbox = text.getBoundingClientRect();

			svg.setAttribute("width", bbox.width * 1.0);
			svg.setAttribute("height", bbox.height * 1.0);
		}
	};

	restartSVGAnimation = () => {
		const text = document.getElementById("header-title-text");
		if (text) {
			text.classList.remove("text-stroke-and-fill");
			void text.offsetWidth;
			text.classList.add("text-stroke-and-fill");
		}
	};

	render() {
		return (
			<div className="svg-wrapper" >
				<svg className={this.props.svgClass} id="header-title">
					<text x="0%" y="66%" textAnchor="left" alignment-baseline="middle" className="text-stroke-and-fill" id="header-title-text">{this.props.title ? this.props.title : "undefined"}</text>
				</svg>
			</div>
		);
	}
}