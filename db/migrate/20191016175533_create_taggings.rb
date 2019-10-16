class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.integer :question_id, null: false

      t.timestamps
    end
    add_index :taggings, [:tag_id, :question_id], unique: true
    add_index :taggings, :question_id
  end
end
