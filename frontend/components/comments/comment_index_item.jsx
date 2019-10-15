import React from "react";

const CommentIndexItem = ({ comment }) => (
  <li className="comment-index-item">
    <p className="comment-index-item-body">{comment.body}</p>
  </li>
);

export default CommentIndexItem;