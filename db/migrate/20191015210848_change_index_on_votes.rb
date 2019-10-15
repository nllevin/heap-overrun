class ChangeIndexOnVotes < ActiveRecord::Migration[5.2]
  def change
    remove_index :votes, column: [:votable_id, :voter_id, :votable_type]
    add_index :votes, [:votable_type, :votable_id, :voter_id], unique: true
  end
end
