json.extract! question, :id, :title, :body, :author_id
json.set! :answerIds, question.answer_ids
json.set! :views, question.views.length