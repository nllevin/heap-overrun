import React from "react";
import AnswerIndexItemContainer from "./answer_index_item_container";

const AnswerIndex = ({ answers }) => {
  if (!answers || answers.length === 0) { return null; }

  return (
    <div className="answers-index">
      <header>
        <h2>{answers.length} Answers</h2>
      </header>
      <ul>
        {
          answers.map(answer => (
            <AnswerIndexItemContainer key={answer.id} answer={answer} />
          ))
        }
      </ul>
    </div>
  );
};

export default AnswerIndex;