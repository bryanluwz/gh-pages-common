import { Component } from "react";
import { Link } from "react-router-dom";

import './Nav.css';

export default class TopNavigationBar extends Component {
	render() {
		return (
			<div className="nav-wrapper">
				<div className="nav-container">
					{/* Contains the nav buttons -- About, Other stuff (interim) */}
					<Link className="nav-button-container" to={"/about"}>
						<button className={`${this.props.pathname === '/about' ? "nav-button-underline" : ""}`}>
							About
						</button>
					</Link>

					<Link className="nav-button-container" to={"/fun-stuff"}>
						<button className={`${this.props.pathname === '/fun-stuff' ? "nav-button-underline" : ""}`}>
							Fun
						</button>
					</Link>

					<Link className="nav-button-container" to={"/coding-stuff"}>
						<button className={`${this.props.pathname === '/coding-stuff' ? "nav-button-underline" : ""}`}>
							Code
						</button>
					</Link>

					<Link className="nav-button-container" to={"/extras-stuff"}>
						<button className={`${this.props.pathname === '/extras-stuff' ? "nav-button-underline" : ""}`}>
							Extras
						</button>
					</Link>

					<Link className="nav-button-container" to={"/news"}>
						<button className={`${this.props.pathname === '/news' ? "nav-button-underline" : ""}`}>
							News
						</button>
					</Link>

					<Link className="nav-button-container" to={"/others"}>
						<button className={`${this.props.pathname === '/others' ? "nav-button-underline" : ""}`}>
							Others
						</button>
					</Link>
				</div>
			</div>
		);
	}
}