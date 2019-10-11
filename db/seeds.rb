# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Answer.destroy_all
Question.destroy_all
User.destroy_all

demo_user = User.create(username: "Demo User", email: "demo@user.com", password: "password")

5.times do 
  user = User.create(
    username: Faker::GreekPhilosophers.unique.name, 
    email: Faker::Internet.unique.email,
    password: "password"
  )

  5.times do
    user.questions.create(
      title: Faker::TvShows::DumbAndDumber.unique.quote,
      body: Faker::Lorem.paragraphs(number: 9).join("\n")
    )
  end
end

users = User.all
questions = Question.all

users.each do |user|
  20.times do
    questions.sample.answers.create(
      author_id: user.id,
      body: Faker::Lorem.paragraphs(number: 6).join("\n")  
    )
  end
end