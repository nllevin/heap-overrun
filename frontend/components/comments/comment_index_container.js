import { connect } from "react-redux";
import CommentIndex from "./comment_index";
import { getComments } from "../../reducers/selectors";
import { fetchComments } from "../../actions/comment_actions";

const mapStateToProps = (state, { commentableId }) => ({
  comments: getComments(state, commentableId)
});

const mapDispatchToProps = (dispatch, { commentableType, commentableId }) => ({
  fetchComments: () => dispatch(fetchComments(commentableType, commentableId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);