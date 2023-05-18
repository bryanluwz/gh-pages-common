import { Component, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';

import './App.css';
import './Main.css';
import './components/others/ContentDisplay.css';

import withRouter from './components/utils/withRouter';

import { isCookie } from './components/utils/cookieMonster';

import Main from './main';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isStickyFooter: false,
			showCookie: !isCookie(),  // to continue show cookie banner or not
			contentTransitionStage: "fadeIn",
			displayLocation: this.props.router.location
		};
	}

	render() {
		return (
			<Fragment>
				{/* Cookie monster */}
				{this.state.showCookie &&
					<CookieConsent
						enableDeclineButton
						expires={999}
						location="bottom"
						declineButtonText="heckin naw"
						buttonText="yesh gib cookies"
						cookieName='wantsCookie'
						visible={this.state.showCookie}
						onAccept={() => { this.setState({ showCookie: false }); }}
						onDecline={() => { this.setState({ showCookie: false }); }}
						buttonWrapperClasses='cookie-button-wrapper'
						declineButtonClasses='cookie-button cookie-button-decline'
						buttonClasses="cookie-button"
						containerClasses="cookie-container"
						contentClasses="cookie-content"
					>
						{"you wants cookies for beddar user experience?"}
					</CookieConsent>}

				<main>
					{/* Content Pages */}
					<div
						className={`${this.state.contentTransitionStage}`}
						onAnimationEnd={() => {
							if (this.state.contentTransitionStage === "fadeOut") {
								this.setState({ contentTransitionStage: "fadeIn", displayLocation: this.props.router.location });
							}
						}}>
						<Routes location={this.state.displayLocation}>
							<Route path='*' element={
								<Fragment>
									<Main router={this.props.router} />
								</Fragment>
							} />
						</Routes>
					</div>
				</main>
			</Fragment>
		);
	}
}

export default withRouter(App);