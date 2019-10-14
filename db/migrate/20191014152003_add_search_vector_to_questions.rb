class AddSearchVectorToQuestions < ActiveRecord::Migration[5.2]
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

  def down
    remove_column :questions, :search_vector
    execute <<-SQL
      DROP TRIGGER IF EXISTS
        questions_search_vector_update
      ON
        questions;
      SQL
  end
end
