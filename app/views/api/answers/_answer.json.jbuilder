json.extract! answer, :id, :body, :question_id, :author_id
json.set! :votes, answer.vote_total
current_user_vote = answer.current_user_vote(current_user.id)
json.set! :currentUserVote, current_user_vote[:up]
json.set! :currentUserVoteId, current_user_vote[:id]
json.set! :answeredAtTime, answer.created_at.inspect.split.take(4).join(" ")