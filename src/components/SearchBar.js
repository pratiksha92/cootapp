import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import { Link } from "react-router-dom";

const headers = {
  "api-key": "E3BEC898888E187D59388EEE072A50CD",
};

const getSuggestionValue = (suggestion) => suggestion.original_title;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => (
  <div>
    {" "}
    <Link to={`/movie/${suggestion.id}`} className="render-suggest">
      {suggestion.original_title}
    </Link>
  </div>
);

export default class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    const url = `https://searchapicoot.search.windows.net/indexes/azureblob-index/docs?api-version=2020-06-30&search=${value}*&$top=6&$orderby=popularity desc`;
    axios.get(url, { headers: headers }).then((res) => {
      console.log(res);
      const results = res.data.value;
      this.setState({ suggestions: results });
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };
  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Search your movie here...",
      value,
      onChange: this.onChange,
    };
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        highlightFirstSuggestion={true}
      />
    );
  }
}
