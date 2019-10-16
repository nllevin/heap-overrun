import React from "react";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state)
      .then(() => {
        this.props.toggleForm();
        this.setState({ body: "" })
      });
  }

  render() {
    const { errors, className } = this.props;
    return (
      <div className={"comment-form" + className}>
        <span className="errors">{errors}</span>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.body}
            onChange={e => this.setState({ body: e.target.value })}
          ></textarea>
          <button className="button">Add Comment</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;