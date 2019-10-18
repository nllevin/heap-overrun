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
Tag.create(title: "javascript", description: "JavaScript (not to be confused with Java) is a high-level, dynamic, multi-paradigm, object-oriented, prototype-based, weakly-typed, and interpreted language used for both client-side and server-side scripting. Its primary use is in the rendering and manipulation of web pages. Use this tag for questions regarding ECMAScript and its various dialects/implementations (excluding ActionScript and Google-Apps-Script).")
Tag.create(title: "ruby", description: "Ruby is a multi-platform open-source, dynamic object-oriented interpreted language, created by Yukihiro Matsumoto (Matz) in 1995. The [ruby] tag is for questions related to the Ruby language, including its syntax and its libraries. Ruby on Rails questions should be tagged with [ruby-on-rails].")
Tag.create(title: "ruby-rails", description: "Ruby on Rails is an open source full-stack web application framework written in Ruby. It follows the popular MVC framework model and is known for its \"convention over configuration\" approach to application development.")
Tag.create(title: "reactjs", description: "React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It uses a declarative paradigm and aims to be both efficient and flexible.")
Tag.create(title: "redux", description: "Redux is a predictable state container for JavaScript applications based on the Flux design pattern.")
Tag.create(title: "html", description: "HTML (HyperText Markup Language) is the standard markup language used for structuring web pages and formatting content. HTML describes the structure of a website semantically along with cues for presentation, making it a markup language, rather than a programming language. HTML works in conjunction primarily with CSS and JavaScript, adding style and behavior to the pages. The most recent revision to the HTML specification is HTML5.2.")
Tag.create(title: "c++", description: "C++ is a general-purpose programming language. It was originally designed as an extension to C, and keeps a similar syntax, but is now a completely different language. Use this tag for questions about code (to be) compiled with a C++ compiler. Use a version specific tag for questions related to a specific standard revision [C++11], [C++17], etc.")
Tag.create(title: "ios", description: "iOS is the mobile operating system running on the Apple iPhone, iPod touch, and iPad. Use this tag [ios] for questions related to programming on the iOS platform. Use the related tags [objective-c] and [swift] for issues specific to those programming languages.")
Tag.create(title: "css", description: "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SVG elements including (but not limited to) colours, layout, fonts, and animations. It also describes how elements should be rendered on screen, on paper, in speech, or on other media.")
Tag.create(title: "sql", description: "Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data, and a tag for the DBMS implementation (e.g. MySQL, PostgreSQL, Oracle, MS SQL Server, IBM DB2, etc.) being used. If your question relates solely to a specific DBMS (uses specific extensions/features), use that DBMS's tag instead. Answers to questions tagged with SQL should use ISO/IEC standard SQL. ")
Tag.create(title: "jquery", description: "jQuery is a Javascript library, consider also adding the Javascript tag. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling, animations and AJAX interactions by minimizing the discrepancies across browsers. A question tagged jquery should be related to jquery, so jquery should be used by the code in question and at least jquery usage-related elements need to be in the question.")
Tag.create(title: "android", description: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT). For topics related to Android, use Android-specific tags such as android-intent, android-activity, android-adapter, etc. For questions other than development or programming, but related to the Android framework, use this link: https://android.stackexchange.com.")
Tag.create(title: "python", description: "Python is a multi-paradigm, dynamically typed, multipurpose programming language, designed to be quick (to learn, to use, and to understand), and to enforce a clean and uniform syntax. Two similar but incompatible versions of Python are commonly in use, Python 2.7 and 3.x. For version-specific Python questions, add the [python-2.7] or [python-3.x] tag. When using a Python variant or library (e.g. Jython, PyPy, Pandas, Numpy), please include it in the tags.")
Tag.create(title: "php", description: "a widely used, high-level, dynamic, object-oriented and interpreted scripting language primarily designed for server-side web development.")
Tag.create(title: "c#", description: "C# (pronounced \"see sharp\") is a high level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .NET family of tools and run-times, which include the .NET Framework and .NET Core. Use this tag for questions about code written in C# or C#'s formal specification.")
Tag.create(title: "java", description: "Java (not to be confused with JavaScript, JScript or JS) is a general-purpose, platform-independent, statically typed, object-oriented programming language designed to be used in conjunction with the Java Virtual Machine (JVM). \"Java platform\" is the name for a computing system that has installed tools for developing and running Java programs. Use this tag for questions referring to the Java programming language or Java platform tools.")

# make users and questions
questions = []
5.times do 
  user = User.create(
    username: Faker::GreekPhilosophers.unique.name, 
    email: Faker::Internet.unique.email,
    password: "password"
  )

  # make different kinds of questions for each user
  2.times do
    questions << user.questions.new(
      title: Faker::GreekPhilosophers.unique.quote,
      body: Faker::Lorem.paragraphs(number: 9).join("\n")
    )
  end

  2.times do
    questions << user.questions.new(
      title: Faker::Movies::StarWars.unique.quote,
      body: Faker::Lorem.paragraphs(number: 9).join("\n")
    )
  end

  2.times do
    questions << user.questions.new(
      title: Faker::Movies::BackToTheFuture.unique.quote,
      body: Faker::Lorem.paragraphs(number: 9).join("\n")
    )
  end

  2.times do
    questions << user.questions.new(
      title: Faker::Movies::Ghostbusters.unique.quote,
      body: Faker::Lorem.paragraphs(number: 9).join("\n")
    )
  end

  2.times do
    questions << user.questions.new(
      title: Faker::Movies::HitchhikersGuideToTheGalaxy.unique.quote,
      body: Faker::Lorem.paragraphs(number: 9).join("\n")
    )
  end
end

# save the questions in random order
questions.shuffle.each do |question|
  question.save

  # add between 1 and 5 random tags to every question
  question.tag_ids = (Tag.first.id..Tag.last.id).to_a.sample(rand(1..5))

  # add a random number of views to every question
  rand(50).times { question.views.create }
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