import React from "react";

const CommentIndexItem = ({ comment, author }) => (
  <li className="comment-index-item">
    <p className="comment-index-item-body">{comment.body} – {author.username}</p>
  </li>
);

export default CommentIndexItem;