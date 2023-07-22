import { Component, createRef } from "react";

import "./Searchbar.css";

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.unarrangedDictionary = { ...this.props.dictionary };
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
		if (searchQuery === "") {
			this.props.setSortedDictionary(this.unarrangedDictionary);
		}

		var matchingKeys = [];

		// Check for matching object keys, or the value of the key that matches the search query
		matchingKeys = matchingKeys.concat(Object.keys(this.unarrangedDictionary).filter(
			(key) => {
				const isMatch = (
					key.toLowerCase().includes(searchQuery.toLowerCase()) ||
					(Object.values(this.dictionary[key]))
						.some((value) => {
							if (typeof value !== typeof "string") return false;
							return value.toLowerCase()?.includes(searchQuery.toLowerCase());
						})
				);
				return isMatch;
			}
		));


		const nonMatchingKeys = Object.keys(this.dictionary).filter(
			(key) => !matchingKeys.includes(key)
		);

		const reorderedKeys = [...matchingKeys, ...nonMatchingKeys];

		const sorted = Object.fromEntries(
			reorderedKeys.map((key) => [key, this.dictionary[key]])
		);
		console.log(sorted);
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