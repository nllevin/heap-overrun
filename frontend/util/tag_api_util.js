export const fetchMatchingTags = (inputVal, selectedTags) => (
  $.ajax({
    method: "GET",
    url: "api/tags",
    data: { inputVal, selectedTags }
  })
);
