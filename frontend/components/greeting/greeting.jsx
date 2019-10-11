import React from "react";
import { Link} from "react-router-dom";
import CommunitiesDropdown from "./communities_dropdown";

class Greeting extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      communitiesDropdown: false
    };
    this.closeDropdown = this.closeDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  closeDropdown() {
    this.setState({
      communitiesDropdown: false
    });
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
          <div className="nav-link">
            <i className="stack-exchange" onClick={this.toggleDropdown}></i>
            {
              this.state.communitiesDropdown ? 
                <CommunitiesDropdown 
                  logout={logout} 
                  toggleDropdown={this.toggleDropdown}
                  closeDropdown={this.closeDropdown}
                />
                : ""
            }
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