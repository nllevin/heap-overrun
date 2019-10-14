class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :voter_id, null: false
      t.integer :votable_id, null: false
      t.string :votable_type, null: false
      t.boolean :up, default: false

      t.timestamps
    end
    add_index :votes, [:votable_id, :voter_id, :votable_type], unique: true
  end
end
