import React from "react";
import AnswerIndexItem from "./answer_index_item";

class AnswerIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAnswers(this.props.questionId);
  }
  render() {
    const { answers } = this.props;

    if (!answers || answers.length === 0) { return null; }

    return (
      <div className="answers-index">
        <header>
          <h2>{answers.length} Answers</h2>
        </header>
        <ul>
          {
            answers.map(answer => (
              <AnswerIndexItem key={answer.id} answer={answer} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default AnswerIndex;