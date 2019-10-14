json.extract! answer, :id, :body, :question_id, :author_id
json.set! :votes, answer.vote_total
json.set! :currentUserVote, answer.current_user_vote(current_user.id)
json.set! :answeredAtTime, answer.created_at.inspect.split.take(4).join(" ")