class Question < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :body, :author_id, presence: true

  belongs_to :author, class_name: :User
end
