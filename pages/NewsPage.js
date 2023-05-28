import { Component, Fragment, createRef } from "react";
import { NewsCardWrapper, NewsCard, NewsView } from "../titleCards";
import { Segment } from "../segment";
import Error404Page from "./error404";
import { Searchbar, StickySidebar } from "../others";

import "./NewsPage.css";
import withRouter from "../utils/withRouter";

class NewsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sortedDictionary: { ...this.props.dictionary },
			selectedNews: null,
			selectedNewsBuffer: null,
			contentTransitionStage: "fadeIn",
			isSmallView: false
		};

		this.newsCardRef = {};
	}

	componentDidMount() {
		// Init resize handler function
		const isSmallView = !this.handleResize(); // Call once here to set / unset small view

		// Init selected news 
		if (isSmallView) {
			const selectedNews = (this.props.router.params.newsKey?.toLowerCase() !== "news") ?
				this.props.router.params.newsKey?.replace(":", '') :
				Object.keys(this.state.sortedDictionary)[0];

			this.setState({
				selectedNews: selectedNews,
				selectedNewsBuffer: selectedNews
			});
		}

		// Init references
		const newsCardRef = this.newsCardRef;
		Object.keys(this.state.sortedDictionary).forEach(key => {
			newsCardRef[key] = createRef();
		});

		window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.dictionary !== this.props.dictionary) {
			this.setState({
				sortedDictionary: { ...this.props.dictionary }
			});
		}

		if (this.state.isSmallView && this.state.contentTransitionStage === 'fadeIn' && this.newsCardRef[this.state.selectedNews]) {
			this.newsCardRef[this.state.selectedNews].current.scrollIntoView();
		}

		if (!this.state.selectedNews && this.state.isSmallView !== prevState.isSmallView && !this.state.isSmallView) {
			const selectedNews = (this.props.router.params.newsKey?.toLowerCase() !== "news") ?
				this.props.router.params.newsKey?.replace(":", '') :
				Object.keys(this.state.sortedDictionary)[0];

			this.setState({
				selectedNews: selectedNews,
				selectedNewsBuffer: selectedNews
			});
		}
	}

	setSortedDictionary = (sorted) => {
		this.setState({
			sortedDictionary: sorted
		});
	};

	// Handle window resize and sets/unsets the small view bool
	handleResize = () => {
		const windowWidth = window.innerWidth;

		if (windowWidth > 800) {
			if (this.state.isSmallView) {
				this.setState({ isSmallView: false });
			}
		}
		else {
			if (!this.state.isSmallView) {
				this.setState({ isSmallView: true });
			}
		}

		return windowWidth > 800;
	};

	render() {
		const { sortedDictionary } = this.state;

		return (
			<Segment segmentBodyStyle={{ width: "90%" }}>
				<Searchbar
					placeholder={"Search"}
					dictionary={sortedDictionary}
					setSortedDictionary={this.setSortedDictionary}
				/>
				<div className="news-page-container" id="news-page-container">
					<div className={`news-page-headlines ${this.state.isSmallView ? "news-page-headlines-wide" : ""}`}>
						{Object.keys(sortedDictionary).length === 0 ?
							<Error404Page customWarning="well this is awkward" />
							:
							<NewsCardWrapper>
								{
									Object.keys(sortedDictionary)
										.map((NewsKey, index) => {
											const news = sortedDictionary[NewsKey];
											return (
												<Fragment>
													<NewsCard
														ref={this.newsCardRef[NewsKey]}
														key={index}
														contentKey={NewsKey}
														contentTitle={news.contentTitle}
														contentSubtitle={news.contentSubtitle}
														contentBody={news.contentBody}
														contentDate={news.lastUpdatedDate}
														isSelected={NewsKey === this.state.selectedNewsBuffer}
														onClick={() => {
															if (this.state.selectedNews === NewsKey && this.state.isSmallView) {
																this.setState({ selectedNews: null, selectedNewsBuffer: null });
															}
															else if (this.state.selectedNews === NewsKey && !this.state.isSmallView) {
																return;
															}

															if (this.state.selectedNews) {
																this.setState({ selectedNewsBuffer: NewsKey, contentTransitionStage: 'fadeOut' });
															}
															else {
																this.setState({ selectedNews: NewsKey, selectedNewsBuffer: NewsKey });
															}

															this.props.router.navigate(`/news/:${NewsKey}`);
														}}
													/>
													{
														(this.state.isSmallView && this.state.selectedNews === NewsKey) &&
														<div className="news-page-view-wide">
															<NewsView
																isSmallView={this.state.isSmallView}
																contentKey={this.state.selectedNews}
																{...this.props.dictionary[this.state.selectedNews]}
																contentTransitionStage={this.state.contentTransitionStage}
																onAnimationEnd={() => {
																	if (this.state.contentTransitionStage === "fadeOut") {
																		this.setState({ selectedNews: this.state.selectedNewsBuffer, contentTransitionStage: "fadeIn" });
																	}
																}}
															/>
														</div>
													}
												</Fragment>
											);
										})
								}
							</NewsCardWrapper>
						}
					</div>
					{
						(window.innerWidth > 800 && this.state.selectedNews) ?
							<div className="news-page-view">
								<StickySidebar>
									<NewsView
										contentKey={this.state.selectedNews}
										{...this.props.dictionary[this.state.selectedNews]}
										contentTransitionStage={this.state.contentTransitionStage}
										onAnimationEnd={() => {
											if (this.state.contentTransitionStage === "fadeOut") {
												this.setState({ selectedNews: this.state.selectedNewsBuffer, contentTransitionStage: "fadeIn" });
											}
										}}
									/>
								</StickySidebar>
							</div>
							:
							<Fragment />
					}
				</div>
			</Segment>
		);
	}
}

export default withRouter(NewsPage);