import { connect } from "react-redux";
import { createAnswer } from "../../actions/answer_actions";
import AnswerForm from "./answer_form";

const mapStateToProps = (state, ownProps) => ({
  answer: {
    question_id: ownProps.questionId,
    body: ""
  },
  errors: state.errors.answer,
  loggedIn: Boolean(state.session.currentUserId)
});

const mapDispatchToProps = dispatch => ({
  processForm: answer => dispatch(createAnswer(answer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm);