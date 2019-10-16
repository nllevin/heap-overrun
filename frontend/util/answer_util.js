export const createAnswer = answer => (
  $.ajax({
    method: "POST",
    url: "api/answers",
    data: { answer }
  })
);

export const updateAnswer = answer => (
  $.ajax({
    method: "PATCH",
    url: `api/answers/${answer.id}`,
    data: { answer }
  })
);

export const deleteAnswer = id => (
  $.ajax({
    method: "DELETE",
    url: `api/answers/${id}`
  })
);