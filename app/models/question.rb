# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :body, :author_id, presence: true

  belongs_to :author, class_name: :User
  has_many :answers
end
