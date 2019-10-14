import React from "react";
import { Route, Link } from "react-router-dom";
import SearchResults from "./search_results";
import QuestionIndexItem from "./question_index_item";
import SideNav from "../side_nav";
import SideBar from "../side_bar";

class QuestionIndex extends React.Component {
  componentDidMount() {
    this.getQuestions();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.getQuestions();
    }
  }

  getQuestions() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const query = searchParams.get("q");
    this.props.fetchQuestions(query !== null, query);
  }

  render() {
    const { questions } = this.props;

    if (!questions) {
      return <h1>No questions to display</h1>;
    }

    const headerText = this.props.location.search ? "Search Results" : "Top Questions";

    const questionItems = questions.map(question => (
      <QuestionIndexItem key={question.id} question={question} />
    ));

    return (
      <div className="main-content">
        <SideNav />
        <main className="main-content-container">
          <section className="question-index">
            <header>
              <div>
                <h1>{headerText}</h1>
                <Link to="/questions/new" className="button">Ask Question</Link>
              </div>
              <Route 
                path="/search" 
                render={props => <SearchResults {...props} count={questions.length} />} 
              />
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