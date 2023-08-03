import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import './Header.css';
import { HamburgerMenuButton, SidebarMenu } from "../nav";
import { SVGAnimation } from "../others";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebarActive: false
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.sidebarActive) {
			document.body.addEventListener('touchmove', this.preventScroll, { passive: false });
			document.body.addEventListener('scroll', this.preventScroll, { passive: false });
			document.body.addEventListener('wheel', this.preventScroll, { passive: false });
		} else {
			document.body.removeEventListener('touchmove', this.preventScroll);
			document.body.removeEventListener('scroll', this.preventScroll);
			document.body.removeEventListener('wheel', this.preventScroll);
		}

		if (prevProps.showHamburger && !this.props.showHamburger) {
			console.log("hamburger to no hamburger");
			this.setState({ sidebarActive: false });
		}
	}

	preventScroll = (event) => {
		event.preventDefault();
	};

	render() {
		return (
			<div className="header-container">
				{
					this.props.showHamburger &&
					<Fragment>
						<HamburgerMenuButton
							isActive={this.state.sidebarActive}
							handleHamburgerButtonClick={
								() => {
									this.setState({ sidebarActive: !this.state.sidebarActive });
								}
							}
						/>
						<SidebarMenu
							navs={this.props.navs}
							sidebarActive={this.state.sidebarActive}
							setSidebarActive={(active) => { this.setState({ sidebarActive: active }); }}
						/>
					</Fragment>
				}
				<Link className="logo-container" to={"/"}>
					{!this.props.showHamburger &&
						<img
							className="logo-img"
							src={process.env.PUBLIC_URL + this.props.imgSrc}
							alt="" />}
					<SVGAnimation title={"bryanluwz"} svgClass="logo-title" />
				</Link>
			</div>
		);
	}
}; 