import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import questionErrorsReducer from "./question_errors_reducer";
import answerErrorsReducer from "./answer_errors_reducer";
import commentErrorsReducer from "./comment_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  question: questionErrorsReducer,
  answer: answerErrorsReducer,
  comments: commentErrorsReducer
});

export default errorsReducer;