import { Component, createRef } from "react";

import "./Searchbar.css";

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.dictionary = this.props.dictionary;

		this.searchbarRef = createRef();
		this.searchQuery = null;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.dictionary !== this.props.dictionary) {
			this.dictionary = this.props.dictionary;
		}
	}

	sortDictionary = () => {
		const searchQuery = this.searchQuery;

		// Check for matching object keys
		const matchingKeys = Object.keys(this.dictionary).filter(
			(key) => key.toLowerCase().includes(searchQuery.toLowerCase())
		);

		const nonMatchingKeys = Object.keys(this.dictionary).filter(
			(key) => !key.toLowerCase().includes(searchQuery.toLowerCase())
		);

		const reorderedKeys = [...matchingKeys, ...nonMatchingKeys];

		const sorted = Object.fromEntries(
			reorderedKeys.map((key) => [key, this.dictionary[key]])
		);

		this.props.setSortedDictionary(sorted);
	};

	render() {
		return (
			<div className="searchbar-wrapper">
				<div className="searchbar-container">
					<i
						className="fa fa-search"
						aria-hidden="true"
						onClick={() => {
							this.searchbarRef.current.focus();
						}}
					/>
					<input
						ref={this.searchbarRef}
						placeholder={this.props.placeholder ? this.props.placeholder : "Search"}
						spellCheck={false}
						onChange={() => {
							this.searchQuery = this.searchbarRef.current.value;
							this.sortDictionary();
						}}
					/>
				</div>
			</div>
		);
	}
}