# == Schema Information
#
# Table name: comments
#
#  id               :bigint           not null, primary key
#  body             :text             not null
#  author_id        :integer          not null
#  commentable_id   :integer          not null
#  commentable_type :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, presence: true
  validates :commentable_type, inclusion: { in: ["Question", "Answer"] }

  belongs_to :author, class_name: :User
  belongs_to :commentable, polymorphic: true
end
