import { RECEIVE_QUESTION } from "../actions/question_actions";
import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from "../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTION:
      return Object.assign({}, state, action.comments);
    case RECEIVE_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment });
    case REMOVE_COMMENT:
      const newState = { ...state };
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;