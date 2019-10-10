import { connect } from "react-redux";
import QuestionShow from "./question_show";
import { fetchQuestion } from "../../actions/question_actions";
import { getQuestion, getQuestionAuthor } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => ({
  question: getQuestion(state, ownProps.match.params.questionId)
});

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow);