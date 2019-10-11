export const getQuestion = (state, questionId) => (
  state.entities.questions[questionId]
);

export const getAnswers = (state, questionId) => (
  Object.values(state.entities.answers)
    .filter(answer => answer.question_id === questionId)
);

export const getQuestionAuthor = (state, questionId) => (
  state.entities.users[getQuestion(state, questionId).author_id]
);