import * as CommentAPIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment)
    .then(
      comment => dispatch(receiveComment(comment)),
      err => dispatch(receiveCommentErrors(err.responseJSON))
    )
);

export const updateComment = comment => dispatch => (
  CommentAPIUtil.updateComment(comment)
    .then(
      comment => dispatch(receiveComment(comment)),
      err => dispatch(receiveCommentErrors(err.responseJSON))
    )
);

export const deleteComment = id => dispatch => (
  CommentAPIUtil.deleteComment(id)
    .then(comment => dispatch(removeComment(comment.id)))
);