import { connect } from "react-redux";
import AnswerIndexItem from "./answer_index_item";
import { getComments } from "../../reducers/selectors";

const mapStateToProps = (state, { answer }) => ({
  comments: getComments(state, "Answer", answer.id)
});

export default connect (
  mapStateToProps,
  null
)(AnswerIndexItem);