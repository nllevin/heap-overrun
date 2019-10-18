json.set! :question do  
  json.partial! "api/questions/question", question: @question
end

json.set! :answers do
  @question.answers.each do |answer|
    json.set! answer.id do
      json.partial! "api/answers/answer", answer: answer
    end
  end
end

question_comments = @question.comments
answer_comments = @question.answers.inject([]) do |comments, answer|
  comments + answer.comments
end
all_comments = question_comments + answer_comments

json.set! :comments do
  all_comments.each do |comment|
    json.set! comment.id do
      json.partial! "api/comments/comment", comment: comment
    end
  end
end

all_posts = [@question] + @question.answers + answer_comments + question_comments
json.set! :authors do
  all_posts.each do |post|
    author = post.author
    json.set! author.id do
      json.partial! "api/users/user", user: author
    end
  end
end