import { connect } from "react-redux";
import { fetchQuestions } from "../../actions/question_actions";
import { getFilteredQuestions } from "../../reducers/selectors";
import QuestionIndex from "./question_index";

const mapStateToProps = state => ({
  questions: getFilteredQuestions(state)
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: (search, query) => dispatch(fetchQuestions(search, query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);