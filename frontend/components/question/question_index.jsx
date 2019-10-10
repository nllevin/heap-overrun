import React from "react";
import { Link } from "react-router-dom";
import QuestionIndexItem from "./question_index_item";
import SideNav from "../side_nav";
import SideBar from "../side_bar";

class QuestionIndex extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { questions } = this.props;

    if (!questions) {
      return <div>No questions to display</div>;
    }

    const questionItems = questions.map(question => (
      <QuestionIndexItem key={question.id} question={question} />
    ));

    return (
      <div className="main-content">
        <SideNav />
        <main className="main-content-container">
          <section className="question-index">
            <header>
              <h1>Top Questions</h1>
              <Link to="/questions/new" className="button">Ask Question</Link>
            </header>
            <ul>
              {questionItems}
            </ul>
          </section> 
          <SideBar />
        </main>
      </div>
      
    );
  }
}

export default QuestionIndex;