import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mapStateToProps = (state, { commentableType, commentableId }) => ({
  comment: {
    body: "",
    commentable_type: commentableType === "questions" ? "Question" : "Answer",
    commentable_id: commentableId
  },
  errors: state.errors.comments.filter(err => err.split(" ")[0] === "Body")
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);