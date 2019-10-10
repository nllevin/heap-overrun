import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../side_bar";
import SideNav from "../side_nav";

class QuestionShow extends React.Component {
  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  render() {
    const { question } = this.props;

    if (!question) {
      return null;
    }

    return (
      <div className="main-content question-show">
        <SideNav />
        <div>
          <header>
            <h1>{question.title}</h1>
            <Link to="/questions/new" className="button">Ask Question</Link>
          </header>
          <div className="question-show-info">
            <span>Asked<strong>today</strong></span>
            <span>Viewed<strong>8 times</strong></span>
          </div>
          <main className="main-content-container">
            <section>
              <aside className="vote-box">
                <i className="up-arrow"></i>
                <span>0</span>
                <i className="down-arrow"></i>
              </aside>
              <p>
                {question.body}
              </p>
            </section>
            <SideBar />
          </main>
        </div>
      </div>
    );
  }
}

export default QuestionShow;