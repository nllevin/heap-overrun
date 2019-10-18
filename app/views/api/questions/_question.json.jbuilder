json.extract! question, :id, :title, :body, :author_id
json.set! :answerIds, question.answer_ids
json.set! :commentIds, question.comment_ids
json.set! :tagNames, question.tags.map { |tag| tag.title }
json.set! :views, question.views.length
json.set! :votes, question.vote_total
if current_user && (current_user_vote = question.current_user_vote(current_user.id))
  json.set! :currentUserVote, current_user_vote.up ? "up" : "down"
  json.set! :currentUserVoteId, current_user_vote.id
else
  json.set! :currentUserVote, nil
  json.set! :currentUserVoteId, nil
end
asked_at_time = question.created_at.inspect.split
json.set! :askedAtTime, "#{asked_at_time.take(4).join(" ")} at #{asked_at_time[4][0..4]}"