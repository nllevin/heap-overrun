json.extract! question, :id, :title, :body, :author_id
json.set! :answerIds, question.answer_ids
json.set! :views, question.views.length
json.set! :askedAtTime, question.created_at.inspect.split.take(4).join(" ")