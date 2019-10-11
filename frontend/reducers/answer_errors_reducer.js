import { RECEIVE_ANSWER_ERRORS, RECEIVE_ANSWER } from "../actions/answer_actions";

const answerErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ANSWER_ERRORS:
      return action.errors;
    case RECEIVE_ANSWER:
      return [];
    default:
      return state;
  }
};

export default answerErrorsReducer;