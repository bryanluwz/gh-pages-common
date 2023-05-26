import { Component, createRef } from "react";

import "./StickySidebar.css";

export default class StickySidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isSticky: false
		};

		this.sidebarRef = createRef();
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		const newsPageContainerOffset = document.querySelector("#news-page-container").offsetTop;
		const sidebar = this.sidebarRef.current;
		const scrollPosition = window.pageYOffset;

		if (scrollPosition >= newsPageContainerOffset || sidebar.style.top > newsPageContainerOffset) {
			this.setState({ isSticky: true });
			sidebar.style.top = `${scrollPosition - newsPageContainerOffset}px`;
		}
		else {
			this.setState({ isSticky: false });
			sidebar.style.top = '0';
		}
	};

	render() {
		const { isSticky } = this.state;

		return (
			<div
				ref={this.sidebarRef}
				className={`${this.props.className ? this.props.className : ""} ${isSticky ? 'sticky' : ''}`}
				style={{ position: 'relative', transition: "0.3s ease" }}
			>
				{/* Sidebar Content */}
				{this.props.children}
			</div>
		);
	}
}