import React from "react";
import { Link } from "react-router-dom";

class CommunitiesDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick);
  }

  handleClick(e) {
    if (this.node.contains(e.target) || e.target.className === "stack-exchange") {
      return;
    }
    this.props.toggleDropdown();
  }

  render() {
    const { logout } = this.props;
    return (
      <div className="communities-dropdown" ref={node => this.node = node}>
        <h3>CURRENT COMMUNITY</h3>
        <ul className="community">
          <li>
            <Link to="/"><i className="so-icon"></i>Heap Overrun</Link>
            <ul className="community-links">
              <li><a onClick={logout}>log out</a></li>
            </ul>        
          </li>
          <li>
            <i className="l-icon"></i>
            <Link to="/"><i className="so-icon grayscale"></i> Meta Heap Overrun</Link>
          </li>
        </ul>
        <h3>YOUR COMMUNITIES</h3>
        <ul className="community your-community">
          <li>
            <Link to="/"><i className="so-icon"></i>Heap Overrun</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default CommunitiesDropdown;