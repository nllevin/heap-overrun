import { connect } from "react-redux";
import AnswerIndexItem from "./answer_index_item";
import { getComments, getPostAuthor } from "../../reducers/selectors";

const mapStateToProps = (state, { answer }) => ({
  comments: getComments(state, "Answer", answer.id),
  author: getPostAuthor(state, "answers", answer.id)
});

export default connect (
  mapStateToProps,
  null
)(AnswerIndexItem);