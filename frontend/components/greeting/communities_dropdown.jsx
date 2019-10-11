import React from "react";
import { withRouter } from "react-router-dom";

class CommunitiesDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick);
    this.props.closeDropdown();
  }

  handleClick(e) {
    if (this.node.contains(e.target) || e.target.className === "stack-exchange") {
      return;
    }
    this.props.toggleDropdown();
  }

  handleLink(link) {
    this.props.closeDropdown();
    this.props.history.push(link);
  }

  render() {
    const { logout } = this.props;
    return (
      <div className="communities-dropdown" ref={node => this.node = node}>
        <h3>CURRENT COMMUNITY</h3>
        <ul className="community">
          <li>
            <a onClick={() => this.handleLink("/")}><i className="so-icon"></i>Heap Overrun</a>
            <ul className="community-links">
              <li><a onClick={logout}>log out</a></li>
            </ul>        
          </li>
          <li>
            <i className="l-icon"></i>
            <a onClick={() => this.handleLink("/")}><i className="so-icon grayscale"></i> Meta Heap Overrun</a>
          </li>
        </ul>
        <h3>YOUR COMMUNITIES</h3>
        <ul className="community your-community">
          <li>
            <a onClick={() => this.handleLink("/")}><i className="so-icon"></i>Heap Overrun</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(CommunitiesDropdown);