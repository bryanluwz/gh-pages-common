import AppTemplate from "./components/appTemplate/AppTemplate";

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
			<AppTemplate />
		);
	}
}

export default App;