import { Component, createRef } from "react";

import "./Searchbar.css";
import Dropdown from "./Dropdown";

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.dictionary = this.props.originalDictionary;

		this.searchbarRef = createRef();
		this.searchQuery = null;
		this.sortRef = createRef();

		this.state = {
			sortOptions: this.props.sortOptions ? this.props.sortOptions : { "A-Z": "A-Z", "Z-A": "Z-A" },  // option text: option value
			sortOption: this.props.sortOptions ? this.props.sortOptions[Object.keys(this.props.sortOptions)[0]] : "A-Z"
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.originalDictionary !== this.props.originalDictionary) {
			this.dictionary = this.props.originalDictionary;
			this.searchbarRef.current.value = "";
			this.sortRef.current.resetSelectedValue();
		}
	}

	sortDictionary = () => {
		const keys = Object.keys(this.dictionary);

		// First by sort order then search query
		if (this.state.sortOption === "A-Z") {
			keys.sort((a, b) => a.localeCompare(b));
		} else if (this.state.sortOption === "Z-A") {
			keys.sort((a, b) => b.localeCompare(a));
		}

		const searchQuery = this.searchQuery;
		if (searchQuery === "" || !searchQuery) {
			let sorted = Object.fromEntries(
				keys.map((key) => [key, this.dictionary[key]])
			);
			this.props.setSortedDictionary(sorted);
			return;
		}

		var matchingKeys = [];

		// Check for matching object keys, or the value of the key that matches the search query
		matchingKeys = matchingKeys.concat(keys.filter(
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

		const nonMatchingKeys = keys.filter(
			(key) => !matchingKeys.includes(key)
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
					{
						this.props.haveSortButton &&
						<Dropdown
							ref={this.sortRef}
							options={this.state.sortOptions}
							onChange={(e, selectedValue) => {
								this.setState({ sortOption: selectedValue },
									() => {
										this.sortDictionary();
									});
							}}
						/>
					}
				</div>
			</div>
		);
	}
}