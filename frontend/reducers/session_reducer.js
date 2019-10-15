import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_QUESTIONS, RECEIVE_QUESTION } from "../actions/question_actions";

const defaultState = {
  currentUserId: null,
  filteredQuestionIds: []
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { currentUserId: action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, state, { currentUserId: null });
    case RECEIVE_QUESTION:
    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, { filteredQuestionIds: Object.keys(action.questions) });
    default:
      return state;
  }
};

export default sessionReducer;