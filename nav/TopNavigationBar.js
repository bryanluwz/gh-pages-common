import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import './Nav.css';

export default class TopNavigationBar extends Component {
	render() {
		return (
			<div className="nav-wrapper">
				<div className="nav-container" >
					{
						typeof this.props.navs === "object" &&
						Object.keys(this.props.navs).map((key, index) => {
							if (this.props.navs[key].hideInNavBar) {
								return <Fragment />;
							}
							let nav = this.props.navs[key];

							let regex = new RegExp(`(${nav.link}+)`, "g");
							let isCurrentPath = regex.test(this.props.pathname);

							return (
								<Link className="nav-button-container" to={nav.link} key={index}>
									<button className={`${isCurrentPath ? "nav-button-underline" : ""}`}>
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