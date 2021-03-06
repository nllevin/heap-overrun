# == Schema Information
#
# Table name: questions
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  body          :text             not null
#  author_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  search_vector :tsvector
#

class Question < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :body, presence: true
  validate :limit_five_tags

  belongs_to :author, class_name: :User
  has_many :answers
  has_many :views
  has_many :votes, as: :votable
  has_many :comments, as: :commentable
  has_many :taggings
  has_many :tags, through: :taggings

  def self.search(query = "") 
    sanitized_query = sanitize_sql_array(["to_tsquery('english', ?)", query.gsub(/\s/, "+")])
    Question.where("search_vector @@ #{sanitized_query}")
  end

  def vote_total
    self.votes.inject(0) do |total, vote|
      total + (vote.up ? 1 : -1)
    end
  end

  def current_user_vote(voter_id)
    self.votes.find { |vote| vote.voter_id == voter_id }
  end

  def limit_five_tags
    if tags.length > 5
      errors.add(:please, "add no more than five tags.")
    end
  end
end
