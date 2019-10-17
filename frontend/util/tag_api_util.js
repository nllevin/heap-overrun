export const fetchMatchingTags = inputVal => (
  $.ajax({
    method: "GET",
    url: "api/tags",
    data: { inputVal }
  })
);
