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

		if (scrollPosition >= newsPageContainerOffset) {
			this.setState({ isSticky: true });
			sidebar.style.position = 'relative';
			sidebar.style.top = `${scrollPosition - newsPageContainerOffset + 10}px`;
		} else {
			this.setState({ isSticky: false });
			sidebar.style.transition = '0.3s ease';
			sidebar.style.position = 'sticky';
			sidebar.style.top = '0';
		}
	};

	render() {
		const { isSticky } = this.state;

		return (
			<div ref={this.sidebarRef} className={`${this.props.className ? this.props.className : ""} ${isSticky ? 'sticky' : ''}`} >
				{/* Sidebar Content */}
				{this.props.children}
			</div>
		);
	}
}