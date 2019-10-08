import React from "react";
import { Link } from "react-router-dom";
import CommunitiesDropdown from "./communities_dropdown";

class Greeting extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      communitiesDropdown: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({
      communitiesDropdown: !this.state.communitiesDropdown
    });
  }
  
  render() {
    const { currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <div className="greeting">
          <div className="nav-link">
            <i className="avatar"><span>{currentUser.username[0].toUpperCase()}</span></i>
          </div>
          <div className="nav-link" onClick={this.toggleDropdown}>
            <i className="stack-exchange"></i>
            <CommunitiesDropdown 
              className={this.state.communitiesDropdown ? "" : "hidden"} 
              ref={this.communitiesDropdown}
              logout={logout} 
            />
          </div>
        </div>
      )
    } else {
      return (
        <div className="greeting">
          <Link to="/login" className="button">Log in</Link>
          <Link to="/signup" className="button">Sign up</Link>
        </div>
      )
    }
  }
}
export default Greeting;