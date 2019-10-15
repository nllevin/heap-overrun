export const fetchAnswerComments = answerId => (
  $.ajax({
    method: "GET",
    url: `api/answers/${answerId}/comments`
  })
);

export const fetchQuestionComments = questionId => (
  $.ajax({
    method: "GET",
    url: `api/questions/${questionId}/comments`
  })
);

export const createComment = comment => (
  $.ajax({
    method: "POST",
    url: "api/comments",
    data: { comment }
  })
);

export const updateComment = comment => (
  $.ajax({
    method: "PATCH",
    url: `api/comments/${comment.id}`,
    data: { comment }
  })
);

export const deleteComment = id => (
  $.ajax({
    method: "DELETE",
    url: `api/comments/${id}`
  })
);