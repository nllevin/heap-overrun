import React from "react";
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    const { comments } = this.props;

    if (!comments) { return null; }

    return (
      <div className="comments-index">
        <ul>
          {
            comments.map(comment => (
              <CommentIndexItem key={comment.id} comment={comment} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default CommentIndex;