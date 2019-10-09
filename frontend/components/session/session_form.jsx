import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { errors, formType, demoLogin } = this.props;
    const headerText = formType === "signup" ?
      <h1>Create your Heap Overrun account. It's free and only takes a minute.</h1>
      : <img src={window.soIconURL}/>;

    const errorsList = (
      <ul className="errors">
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );

    const usernameInput = (
      <label>Display name
        <input type="text" value={this.state.username} onChange={this.update("username")}/>
      </label>
    );

    const otherChoice = formType === "signup" ?
      <p>Already have an account? <Link to="/login">Log in</Link></p> :
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>

    return (
      <div className="content session-form">
        {headerText}
        <form onSubmit={this.handleSubmit}>
          {errorsList}
          {formType === "signup" ? usernameInput : ""}
          <label>Email
            <input type="text" value={this.state.email} onChange={this.update("email")} />
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update("password")} />
          </label>
          <button className="button">{formType === "signup" ? "Sign up" : "Log in"}</button>
          <a className="button" onClick={demoLogin}>Log in as demo user</a>
        </form>
        {otherChoice}
      </div>
    );
  }
}

export default SessionForm;