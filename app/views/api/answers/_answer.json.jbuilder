json.extract! answer, :id, :body, :question_id, :author_id
json.set! :commentIds, answer.comment_ids
json.set! :votes, answer.vote_total
if current_user && (current_user_vote = answer.current_user_vote(current_user.id))
  json.set! :currentUserVote, current_user_vote.up
  json.set! :currentUserVoteId, current_user_vote.id
else
  json.set! :currentUserVote, nil
  json.set! :currentUserVoteId, nil
end
json.set! :answeredAtTime, answer.created_at.inspect.split.take(4).join(" ")