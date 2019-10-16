import { RECEIVE_QUESTION } from "../actions/question_actions";
import { 
  RECEIVE_ANSWER, 
  REMOVE_ANSWER 
} from "../actions/answer_actions";

const answersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTION:
      return Object.assign({}, state, action.answers);
    case RECEIVE_ANSWER:
      return Object.assign({}, state, {[action.answer.id]: action.answer});
    case REMOVE_ANSWER:
      const newState = {...state};
      delete newState[action.answerId];
      return newState;
    default:
      return state;
  }
};

export default answersReducer;