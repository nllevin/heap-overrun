# == Schema Information
#
# Table name: answers
#
#  id          :bigint           not null, primary key
#  body        :text             not null
#  question_id :integer          not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord
  validates :body, presence: true

  belongs_to :author, class_name: :User
  belongs_to :question
  has_many :votes, as: :votable
  has_many :comments, as: :commentable

  def vote_total
    self.votes.inject(0) do |total, vote|
      total + (vote.up ? 1 : -1)
    end
  end

  def current_user_vote(voter_id)
    self.votes.find { |vote| vote.voter_id == voter_id }
  end
end
