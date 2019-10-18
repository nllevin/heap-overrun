import { connect } from "react-redux";
import QuestionShow from "./question_show";
import { fetchQuestion } from "../../actions/question_actions";
import { 
  getPost, 
  getPostAuthor, 
  getAnswers,
  getComments
} from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  const questionId = parseInt(ownProps.match.params.questionId);
  return {
    question: getPost(state, "questions", questionId),
    answers: getAnswers(state, questionId),
    comments: getComments(state, "Question", questionId),
    author: getPostAuthor(state, "questions", questionId)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow);