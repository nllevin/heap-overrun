import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_QUESTION, RECEIVE_QUESTIONS } from "../actions/question_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_QUESTION:
    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, action.authors);
    default:
      return state;
  }
};

export default usersReducer;