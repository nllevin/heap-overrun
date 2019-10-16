import * as QuestionAPIUtil from "../util/question_util";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const RECEIVE_QUESTION_ERRORS = "RECEIVE_QUESTION_ERRORS";

const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const receiveQuestion = data => ({
  type: RECEIVE_QUESTION,
  question: data.question,
  answers: data.answers,
  comments: data.comments
});

const removeQuestion = questionId => ({
  type: REMOVE_QUESTION,
  questionId
});

const receiveQuestionErrors = errors => ({
  type: RECEIVE_QUESTION_ERRORS,
  errors
});

export const fetchQuestions = (search, query) => dispatch => (
  QuestionAPIUtil.fetchQuestions(search, query)
    .then(questions => dispatch(receiveQuestions(questions)))
);

export const fetchQuestion = id => dispatch => (
  QuestionAPIUtil.fetchQuestion(id)
    .then(question => dispatch(receiveQuestion(question)))
);

export const createQuestion = question => dispatch => (
  QuestionAPIUtil.createQuestion(question)
    .then(
      data => {
        dispatch(receiveQuestion(data));
        return data.question;
      },
      err => dispatch(receiveQuestionErrors(err.responseJSON))
    )
);

export const updateQuestion = question => dispatch => (
  QuestionAPIUtil.updateQuestion(question)
    .then(
      question => {
        dispatch(receiveQuestion(question));
        return question;
      },
      err => dispatch(receiveQuestionErrors(err.responseJSON))
    )
);

export const deleteQuestion = id => dispatch => (
  QuestionAPIUtil.deleteQuestion(id)
    .then(question => dispatch(removeQuestion(question.id)))
);