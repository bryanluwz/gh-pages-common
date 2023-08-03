import { createRef } from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

export class HamburgerMenuButton extends Component {
	render() {
		return (
			<button
				id="hamburger-menu-button"
				className="hamburger-menu-button"
				onClick={this.props.handleHamburgerButtonClick}
			>
				<i className={`fa fa-times ${this.props.isActive ? "fa-fixed active" : "inactive"}`} aria-hidden="true" />
				<i className={`fa fa-bars ${this.props.isActive ? "inactive" : "active"}`} aria-hidden="true" />
			</button>
		);
	}
}

export class SidebarMenu extends Component {
	constructor(props) {
		super(props);
		this.sidebarMenuRef = createRef();
	}

	handleOutsideClick = (event) => {
		const sidebarMenu = this.sidebarMenuRef.current;
		if (sidebarMenu && !sidebarMenu.contains(event.target)) {
			this.props.setSidebarActive(false);
		}
	};

	componentDidUpdate(prevProps, prevState) {
		// if prev props of sidebarActive changes to false, remove event listener, else change to true, add event listenrer
		if (prevProps.sidebarActive !== this.props.sidebarActive) {
			if (this.props.sidebarActive) {
				setTimeout(() => {
					document.addEventListener('click', this.handleOutsideClick);
				}, 100);
			} else {
				document.removeEventListener('click', this.handleOutsideClick);
			}
		}
	}

	render() {
		return (
			<div
				id="sidebar-menu"
				className={`sidebar-menu ${this.props.sidebarActive ? "active" : ""}`}
				ref={this.sidebarMenuRef}
			>
				<div className="sidebar-menu-header">
					<div className="sidebar-menu-title">Menu</div>
					{/* <button
						className="sidebar-menu-header-close-button"
						onClick={() => { this.props.setSidebarActive(false); }}
					>
						<i className="fa fa-times" aria-hidden="true" />
					</button> */}
				</div>
				<div className="sidebar-menu-links">
					{
						typeof this.props.navs === "object" &&
						Object.keys(this.props.navs).map((key, index) => {
							let nav = this.props.navs[key];
							return (
								<Link className="nav-button-container"
									to={nav.link}
									key={index}
									onClick={this.props.onLinkClick ? this.props.onLinkClick : () => { this.props.setSidebarActive(false); }}>
									<button className={`${this.props.pathname === nav.link ? "nav-button-underline" : ""}`} >
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