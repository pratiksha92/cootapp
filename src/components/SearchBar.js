import React, { Component, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import { Link } from "react-router-dom";

const headers = {
  "api-key": "E3BEC898888E187D59388EEE072A50CD",
};

const fetchSuggestedMovies = (value) => {
  console.log(value);
  const searchResults = client.search(value + "*", {
    orderBy: ["popularity desc"],
    top: 5,
  });
  let movies = [];
  for (const result of searchResults.results) {
    const { original_title, popularity } = result.document;
    movies.push({ name: original_title, popularity: popularity });
  }
  return movies;
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

const selectSuggestion = (
  event,
  { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
) => {
  console.log(suggestionValue);
};

const { SearchClient, AzureKeyCredential } = require("@azure/search-documents");

// We'll connect to the Azure Cognitive Search public sandbox and send a
// query to its "nycjobs" index built from a public dataset of available jobs
// in New York.
const indexName = "azureblob-index";
const apiKey = "E3BEC898888E187D59388EEE072A50CD";

// Create a SearchClient to send queries`
const client = new SearchClient(
  `https://searchapicoot.search.windows.net`,
  indexName,
  new AzureKeyCredential(apiKey)
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
    {
      return (
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      );
    }
  }
}
