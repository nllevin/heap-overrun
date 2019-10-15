import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../side_bar";
import SideNav from "../side_nav";
import VoteWidgetContainer from "../vote_widget_container";
import AnswerIndexContainer from "../answer/answer_index_container";
import AnswerFormContainer from "../answer/answer_form_container";

class QuestionShow extends React.Component {
  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  render() {
    const { question, author } = this.props;

    if (!question) {
      return null;
    }

    return (
      <div className="main-content">
        <SideNav />
        <div className="post-show">
          <header>
            <h1>{question.title}</h1>
            <Link to="/questions/new" className="button">Ask Question</Link>
          </header>
          <div className="post-show-info">
            <span>Asked<strong>{question.askedAtTime}</strong></span>
            <span>Viewed<strong>{question.views} times</strong></span>
          </div>
          <main className="main-content-container">
            <section className="post-container">
              <div className="post-show-main">
                <VoteWidgetContainer post={question} postClass="questions" />
                <p>
                  {question.body}
                </p>
              </div>
              <footer>
                <div className="post-signature">
                  <p>asked {question.askedAtTime}</p>
                  <div>
                    <i className="avatar">K</i>
                    <p>Kitty</p>
                  </div>
                </div>
              </footer>
              <AnswerIndexContainer questionId={question.id} />
              <AnswerFormContainer questionId={question.id} />
            </section>
            <SideBar />
          </main>
        </div>
      </div>
    );
  }
}

export default QuestionShow;