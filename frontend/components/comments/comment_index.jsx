import React from "react";
import CommentIndexItem from "./comment_index_item";
import CommentFormContainer from "./comment_form_container";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formOpen: false };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({formOpen: !this.state.formOpen})
  }

  render() {
    const { comments, commentableType, commentableId } = this.props;

    if (!comments) { return null; }

    let formClassName = "";
    if (!this.state.formOpen) { formClassName += " hidden"; }
    if (comments.length === 0) { formClassName += " no-comments"; }

    return (
      <div className="comments-index">
        {
          comments.length === 0 ? "" : (
            <ul>
              {
                comments.map(comment => (
                  <CommentIndexItem key={comment.id} comment={comment} />
                ))
              }
            </ul>
          )
        }
        <a 
          className={this.state.formOpen ? "hidden" : ""}
          onClick={this.toggleForm}
        >add a comment</a>
        <CommentFormContainer 
          className={formClassName} 
          commentableType={commentableType}
          commentableId={commentableId}
          toggleForm={this.toggleForm}
        />
      </div>
    );
  }
}

export default CommentIndex;