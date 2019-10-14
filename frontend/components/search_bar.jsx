import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    const searchParams = new URLSearchParams(this.props.location.search);
    this.state = { query: searchParams.get("q") || "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      const searchParams = new URLSearchParams(this.props.location.search);
      this.setState({ query: searchParams.get("q") || "" });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/search?q=${this.state.query}`);
  }

  update(e) {
    this.setState({query: e.target.value});
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <label>
            <i className="search-icon"></i>
            <input 
              type="text" 
              placeholder="Search..."
              value={this.state.query} 
              onChange={this.update} 
            />
          </label>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);