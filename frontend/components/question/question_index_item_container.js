import { connect } from "react-redux";
import QuestionIndexItem from "./question_index_item";
import { getPostAuthor } from "../../reducers/selectors";

const mapStateToProps = (state, { question }) => ({
  author: getPostAuthor(state, "questions", question.id)
});

export default connect(
  mapStateToProps,
  null
)(QuestionIndexItem);