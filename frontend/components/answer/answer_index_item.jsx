import React from "react";

const AnswerIndexItem = ({ answer }) => (
  <section className="post-container answer-item-container">
    <div className="post-show-main">
      <aside className="vote-box">
        <i className="up-arrow"></i>
        <span>0</span>
        <i className="down-arrow"></i>
      </aside>
      <p>
        {answer.body}
      </p>
    </div>
    <footer>
      <div className="post-signature">
        <p>answered 1 min ago</p>
        <div>
          <i className="avatar">K</i>
          <p>Kitty</p>
        </div>
      </div>
    </footer>
  </section>
);

export default AnswerIndexItem;