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

  belongs_to :author, class_name: :User
  has_many :answers
  has_many :views

  def self.search(query = "") 
    sanitized_query = sanitize_sql_array(["to_tsquery('english', ?)", query.gsub(/\s/,"+")])
    Question.where("search_vector @@ #{sanitized_query}")
  end
end
