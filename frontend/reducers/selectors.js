export const getPost = (state, postType, postId) => (
  state.entities[postType][postId]
);

export const getFilteredQuestions = state => (
  Object.values(state.entities.questions)
    .filter(question => state.session.filteredQuestionIds.includes(String(question.id)))
);

export const getAnswers = (state, questionId) => (
  Object.values(state.entities.answers)
    .filter(answer => answer.question_id === questionId)
);

export const getComments = (state, commentableType, commentableId) => (
  Object.values(state.entities.comments)
    .filter(comment => (
      comment.commentable_type === commentableType
      && comment.commentable_id === commentableId
    ))
);

export const getPostAuthor = (state, postType, postId) => {
  const post = getPost(state, postType, postId);
  if (post) { return state.entities.users[post.author_id]; }
};