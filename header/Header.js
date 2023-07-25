import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import './Header.css';
import { HamburgerMenuButton, SidebarMenu } from "../nav";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebarActive: false
		};
	}

	render() {
		return (
			<div className="header-container">
				{
					this.props.showHamburger &&
					<Fragment>
						<HamburgerMenuButton
							handleHamburgerButtonClick={
								() => {
									this.setState({ sidebarActive: true });
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
					<img className="logo-img" src={process.env.PUBLIC_URL + this.props.imgSrc} alt="nil" />
					<div className="logo-title">bryanluwz</div>
				</Link>
			</div>
		);
	}
} 