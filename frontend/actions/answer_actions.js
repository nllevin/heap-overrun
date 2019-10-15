import * as AnswerAPIUtil from "../util/answer_util";

export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";
export const RECEIVE_ANSWER_ERRORS = "RECEIVE_ANSWER_ERRORS";

const receiveAnswers = answers => ({
  type: RECEIVE_ANSWERS,
  answers
});

export const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer
});

const removeAnswer = answerId => ({
  type: REMOVE_ANSWER,
  answerId
});

const receiveAnswerErrors = errors => ({
  type: RECEIVE_ANSWER_ERRORS,
  errors
});

export const fetchAnswers = (questionId) => dispatch => (
  AnswerAPIUtil.fetchAnswers(questionId)
    .then(answers => dispatch(receiveAnswers(answers)))
);

export const createAnswer = answer => dispatch => (
  AnswerAPIUtil.createAnswer(answer)
    .then(
      answer => dispatch(receiveAnswer(answer)),
      err => dispatch(receiveAnswerErrors(err.responseJSON))
    )
);

export const updateAnswer = answer => dispatch => (
  AnswerAPIUtil.updateAnswer(answer)
    .then(
      answer => dispatch(receiveAnswer(answer)),
      err => dispatch(receiveAnswerErrors(err.responseJSON))
    )
);

export const deleteAnswer = id => dispatch => (
  AnswerAPIUtil.deleteAnswer(id)
    .then(answer => dispatch(removeAnswer(answer.id)))
);