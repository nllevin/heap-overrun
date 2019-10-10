import React from "react";
import { Link } from "react-router-dom";

const QuestionIndexItem = ({ question }) => (
  <li className="question-index-item">
    <Link to={`/questions/${question.id}`}>
      <ul className="question-data">
        <li>
          <span>0</span>
          <span>votes</span>
        </li>
        <li>
          <span>0</span>
          <span>answers</span>
        </li>
        <li>
          <span>0</span>
          <span>views</span>
        </li>
      </ul>
    </Link>
    <div className="question-main">
      <h3>
        <Link to={`/questions/${question.id}`}>{question.title}</Link>
      </h3>
      <div className="question-details">
        <ul className="question-tags">
          <li><a>Tag #1</a></li>
          <li><a>Tag #2</a></li>
          <li><a>Tag #3</a></li>
        </ul>
        <span className="question-origin">
          <a>asked 31 secs ago</a>
          <a>author</a>
          <span>15</span>
        </span>
      </div>
    </div>
  </li>
)

export default QuestionIndexItem;