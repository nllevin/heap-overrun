# == Schema Information
#
# Table name: votes
#
#  id           :bigint           not null, primary key
#  voter_id     :integer          not null
#  votable_id   :integer          not null
#  votable_type :string           not null
#  up           :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Vote < ApplicationRecord
  validates :votable_type, inclusion: { in: ["Question", "Answer"] }
  validates :up, inclusion: { in: [true, false] }
  validates :votable_id, uniqueness: { scope: [:voter_id, :votable_type] }

  belongs_to :votable, polymorphic: true
  belongs_to :voter, class_name: :User
end
