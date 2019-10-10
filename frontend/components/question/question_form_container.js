import { connect } from "react-redux";
import { createQuestion } from "../../actions/question_actions";
import QuestionForm from "./question_form";

const mapStateToProps = state => ({
  question: {
    title: "",
    body: ""
  },
  errors: state.errors.question
});

const mapDispatchToProps = dispatch => ({
  processForm: question => dispatch(createQuestion(question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);