export const getQuestion = (state, questionId) => (
  state.entities.questions[questionId]
);

export const getQuestionAuthor = (state, questionId) => (
  state.entities.users[getQuestion(state, questionId).author_id]
);