import React from "react";
import { Link } from "react-router-dom";

const QuestionIndexItem = ({ question }) => (
  <li className="question-index-item">
    <Link to={`/questions/${question.id}`}>
      <ul className="question-data">
        <li>
          <span>{question.votes}</span>
          <span>votes</span>
        </li>
        <li>
          <span>{question.answerIds.length}</span>
          <span>answers</span>
        </li>
        <li>
          <span>{question.views}</span>
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
          {question.tagNames.map((tagName, idx) => <li key={idx}><a>{tagName}</a></li>) }
        </ul>
        <span className="question-origin">
          <a>asked {question.askedAtTime}</a>
          <a>author</a>
          <span>15</span>
        </span>
      </div>
    </div>
  </li>
)

export default QuestionIndexItem;