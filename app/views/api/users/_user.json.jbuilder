json.extract! user, :id, :username
json.set! :question_ids, user.questions.pluck(:id)