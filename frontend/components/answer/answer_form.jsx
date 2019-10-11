import React from "react";
import { Link } from "react-router-dom";

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.answer;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.setState({body: ""}));
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { errors, loggedIn } = this.props;
    const errorsList = (
      <ul className="errors">
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );

    return (
      <div className="answer-form">
        {
          loggedIn ? (
            <div>
              <h2>Your Answer</h2>
              {errorsList}
              <form onSubmit={this.handleSubmit}>
                <textarea
                  value={this.state.body}
                  onChange={this.update("body")}
                ></textarea>
                <button className="button" onClick={this.handleSubmit}>Post Your Answer</button>
              </form>
            </div>
          ) : (
            <h2 className="answer-access-message">
              <Link to="/signup">Sign up</Link> or <Link to="/login">log in</Link> to post an answer
            </h2>
          )
        }
      </div>
    );
  }
}

export default AnswerForm;