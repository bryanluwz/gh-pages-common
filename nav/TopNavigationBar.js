import { Component } from "react";
import { Link } from "react-router-dom";

import './Nav.css';

export default class TopNavigationBar extends Component {
	render() {
		return (
			<div className="nav-wrapper">
				<div className="nav-container">
					{
						typeof this.props.navs === "object" &&
						Object.keys(this.props.navs).map((key, index) => {
							let nav = this.props.navs[key];
							return (
								<Link className="nav-button-container" to={nav.link} key={index}>
									<button className={`${this.props.pathname === nav.link ? "nav-button-underline" : ""}`}>
										{nav.name}
									</button>
								</Link>
							);
						}
						)
					}
				</div>
			</div>
		);
	}
}