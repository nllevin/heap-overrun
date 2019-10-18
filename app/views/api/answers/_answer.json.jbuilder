json.extract! answer, :id, :body, :question_id, :author_id
json.set! :commentIds, answer.comment_ids
json.set! :votes, answer.vote_total
if current_user && (current_user_vote = answer.current_user_vote(current_user.id))
  json.set! :currentUserVote, current_user_vote.up ? "up" : "down"
  json.set! :currentUserVoteId, current_user_vote.id
else
  json.set! :currentUserVote, nil
  json.set! :currentUserVoteId, nil
end
answered_at_time = answer.created_at.inspect.split
json.set! :answeredAtTime, "#{answered_at_time.take(4).join(" ")} at #{answered_at_time[4][0..4]}"