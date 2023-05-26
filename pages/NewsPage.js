import { Component, Fragment } from "react";
import { NewsCardWrapper, NewsCard, NewsView } from "../titleCards";
import { Segment } from "../segment";
import Error404Page from "./error404";
import { Searchbar, StickySidebar } from "../others";

import "./NewsPage.css";

export default class NewsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sortedDictionary: Object.fromEntries(
				Object.entries(this.props.dictionary).sort(([, newsA], [, newsB]) => {
					const newsDateA = new Date(newsA.lastUpdatedDate);
					const newsDateB = new Date(newsB.lastUpdatedDate);
					return newsDateB - newsDateA;
				})
			),
			selectedNews: null,
			selectedNewsBuffer: null,
			contentTransitionStage: "fadeIn"
		};
	}

	componentDidMount() {
		this.setState({ selectedNews: Object.keys(this.state.sortedDictionary)[0] });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.dictionary !== this.props.dictionary) {

			this.setState({
				sortedDictionary: { ...this.props.dictionary }
			});
		}
	}

	setSortedDictionary = (sorted) => {
		this.setState({
			sortedDictionary: sorted
		});
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
					<div className="news-page-headlines">
						{Object.keys(sortedDictionary).length === 0 ?
							<Error404Page customWarning="well this is awkward" />
							:
							<Fragment>
								<NewsCardWrapper>
									{
										Object.keys(sortedDictionary)
											.map((NewsKey, index) => {
												var news = sortedDictionary[NewsKey];
												return (
													<NewsCard
														key={index}
														contentKey={NewsKey}
														contentTitle={news.contentTitle}
														contentSubtitle={news.contentSubtitle}
														contentBody={news.contentBody}
														contentDate={news.lastUpdatedDate}
														onClick={() => { this.setState({ selectedNewsBuffer: NewsKey, contentTransitionStage: 'fadeOut' }); }}
													/>
												);
											})
									}
								</NewsCardWrapper>
							</Fragment>
						}
					</div>
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
				</div>
			</Segment>
		);
	}
}