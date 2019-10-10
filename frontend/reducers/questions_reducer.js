import { 
  RECEIVE_QUESTIONS, 
  REMOVE_QUESTION, 
  RECEIVE_QUESTION 
} from "../actions/question_actions";

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, action.questions);
    case RECEIVE_QUESTION:
      return Object.assign({}, state, { [action.question.id]: action.question });
    case REMOVE_QUESTION:
      const newState = {...state};
      delete newState[action.questionId];
      return newState;
    default:
      return state;
  }
};

export default questionsReducer;