import React from "react";
import SearchBar from "../search_bar";

class SearchResults extends React.Component {
  render() {
    const { count } = this.props;
    const searchParams = new URLSearchParams(this.props.location.search);
    return (
      <div className="search-results">
        {count > 0 ? <p>Results for {searchParams.get("q")}</p> : ""}
        <SearchBar />
        <h3>{count} results</h3>
      </div>
    );
  }
}

export default SearchResults;