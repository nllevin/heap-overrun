json.set! :questions do
  @questions.each do |question|
    json.set! question.id do
      json.partial! "api/questions/question", question: question
    end
  end
end

json.set! :authors do
  @questions.each do |question|
    author = question.author
    json.set! author.id do
      json.partial! "api/users/user", user: author
    end
  end
end