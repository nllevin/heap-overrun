# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tag.destroy_all
Tagging.destroy_all
Vote.destroy_all
Comment.destroy_all
View.destroy_all
Answer.destroy_all
Question.destroy_all
User.destroy_all

demo_user = User.create(username: "Demo User", email: "demo@user.com", password: "password")
Tag.create(title: "javascript")
Tag.create(title: "ruby")
Tag.create(title: "ruby-rails")
Tag.create(title: "react")
Tag.create(title: "redux")
Tag.create(title: "python")

# make users
5.times do 
  user = User.create(
    username: Faker::GreekPhilosophers.unique.name, 
    email: Faker::Internet.unique.email,
    password: "password"
  )

  # make questions for each user
  5.times do
    question = user.questions.create(
      title: Faker::Movies::StarWars.unique.quote,
      body: Faker::Lorem.paragraphs(number: 9).join("\n")
    )

    # add 1-5 random tags to every question
    question.tag_ids = (Tag.first.id..Tag.last.id).to_a.sample(rand(1..5))

    # make views for each question
    rand(50).times { question.views.create }
  end
end

users = User.all
questions = Question.all

users.each do |user|
  25.times do
    # add answers to random questions for each user
    question = questions.sample
    question.answers.create(
      author_id: user.id,
      body: Faker::Lorem.paragraphs(number: 6).join("\n")  
    )
    question.views.create

    # add comments to random questions for each user
    question.comments.create(
      author_id: user.id,
      body: Faker::Lorem.paragraphs(number: 2).join("\n")
    )
  end

  answers = Answer.all

  25.times do
    # add comments to random answers for each user
    answer = answers.sample
    answer.comments.create(
      author_id: user.id,
      body: Faker::Lorem.paragraphs(number: 2).join("\n")
    )
  end

  # have every user vote on every question, answer
  users.each do |user|
    questions.each do |question|
      Vote.create(
        voter_id: user.id, 
        votable_id: question.id, 
        votable_type: "Question",
        up: [true, true, false].sample
      )
    end
    answers.each do |answer|
      Vote.create(
        voter_id: user.id, 
        votable_id: answer.id, 
        votable_type: "Answer",
        up: [true, true, false].sample
      )
    end
  end
end