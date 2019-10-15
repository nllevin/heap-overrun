json.extract! question, :id, :title, :body, :author_id
json.set! :answerIds, question.answer_ids
json.set! :views, question.views.length
json.set! :votes, question.vote_total
current_user_vote = question.current_user_vote(current_user.id)
json.set! :currentUserVote, current_user_vote[:up]
json.set! :currentUserVoteId, current_user_vote[:id]
json.set! :askedAtTime, question.created_at.inspect.split.take(4).join(" ")