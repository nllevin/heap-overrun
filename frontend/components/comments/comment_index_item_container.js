import { connect } from "react-redux";
import CommentIndexItem from "./Comment_index_item";
import { getPostAuthor } from "../../reducers/selectors";

const mapStateToProps = (state, { comment }) => ({
  author: getPostAuthor(state, "comments", comment.id)
});

export default connect(
  mapStateToProps,
  null
)(CommentIndexItem);