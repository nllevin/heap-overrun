json.extract! answer, :id, :body, :question_id, :author_id
json.set! :answeredAtTime, answer.created_at.inspect.split.take(4).join(" ")