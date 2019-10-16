import React from "react";
import VoteWidgetContainer from "../vote_widget_container";
import CommentIndex from "../comments/comment_index";


const AnswerIndexItem = ({ answer, comments }) => (
  <section className="post-container answer-item-container">
    <div className="post-show-main">
      <VoteWidgetContainer post={answer} postClass="answers" />
      <p>
        {answer.body}
      </p>
    </div>
    <footer>
      <div className="post-signature">
        <p>answered {answer.answeredAtTime}</p>
        <div>
          <i className="avatar">K</i>
          <p>Kitty</p>
        </div>
      </div>
    </footer>
    <CommentIndex
      comments={comments}
      commentableType="answers"
      commentableId={answer.id}
    />
  </section>
);

export default AnswerIndexItem;