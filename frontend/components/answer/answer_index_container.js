import { connect } from "react-redux";
import { getAnswers } from "../../reducers/selectors";
import { fetchAnswers } from "../../actions/answer_actions";
import AnswerIndex from "./answer_index";

const mapStateToProps = (state, ownProps) => ({
  answers: getAnswers(state, ownProps.questionId)
});

const mapDispatchToProps = dispatch => ({
  fetchAnswers: questionId => dispatch(fetchAnswers(questionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndex);