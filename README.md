# [Heap Overrun](https://heap-overrun.herokuapp.com)

A Stack Overflow clone that features questions, answers, tags for questions, and polymorphic comments and voting for both questions and answers. Includes question search and an RSS feed of popular questions drawn from throughout the Stack Exchange network.

#### Built With
  * [Ruby on Rails](https://rubyonrails.org)
    * model-view-controller web-application framework
  * [PostgreSQL](https://www.postgresql.org)
    * relational database management system
  * [React](https://reactjs.org)
    * JavaScript library for building user interfaces
  * [Redux](https://redux.js.org)
    * JavaScript library for managing application state
  * [Feednami](https://toolkit.sekando.com/docs/en/feednami)
    * API to parse RSS feed and avoid Cross-Origin Read Blocking

## Key Features

### Tagging Questions
The form for tagging questions has a dropdown list with autocompleted suggestions and descriptions of tags. Selected tags turn into styled HTML elements that can be edited or removed by clicking.

![alt text](https://github.com/nllevin/heap-overrun/blob/master/app/assets/images/tagging_screenshot.png "Heap Overrun Tag Form Screenshot")

On submission of the QuestionForm, inside the QuestionsController, tags are assigned or created as needed:
```ruby
@question.tag_ids = params[:question][:tags].map(&:downcase).uniq.map do |tag_name|
  tag = Tag.find_by(title: tag_name)
  tag ? tag.id : Tag.create(title: tag_name).id
end
```

### Question Search
Question Search is implemented with PostgreSQL's built-in full text search functionality. PostgreSQL preprocesses the data by parsing the text into words, normalizing the words into lexemes with the use of a dictionary, and storing the preprocessed document in a form optimized for searching, in this case in a column called `search_vector.` A trigger causes `search_vector` to update accordingly whenever a question is added or updated. Finally, a Generalized Inverted Index (GIN) allows for speedy searches.

![alt text](https://github.com/nllevin/heap-overrun/blob/master/app/assets/images/search_screenshot.png "Heap Overrun Search Screenshot")

The database migration in Rails appears as follows:
```ruby
  def up
    add_column :questions, :search_vector, :tsvector
    execute <<-SQL
      CREATE INDEX 
        questions_search_idx
      ON 
        questions
      USING GIN
        (search_vector);

      DROP TRIGGER IF EXISTS
        questions_search_vector_update
      ON
        questions;

      CREATE TRIGGER
        questions_search_vector_update
      BEFORE INSERT OR UPDATE
      ON
        questions
      FOR EACH ROW EXECUTE PROCEDURE
        tsvector_update_trigger (search_vector, 'pg_catalog.english', title, body);
    SQL
    Question.find_each { |question| question.touch }
  end
 ```
 
 ## Future Features
   * Sorting/pagination
   * Text markup
   * Reputation and privileges
