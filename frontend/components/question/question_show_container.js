import { connect } from "react-redux";
import QuestionShow from "./question_show";
import { fetchQuestion } from "../../actions/question_actions";
import { 
  getQuestion, 
  getQuestionAuthor, 
  getAnswers,
  getComments
} from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  const questionId = parseInt(ownProps.match.params.questionId);
  return {
    question: getQuestion(state, questionId),
    answers: getAnswers(state, questionId),
    comments: getComments(state, "Question", questionId)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow);