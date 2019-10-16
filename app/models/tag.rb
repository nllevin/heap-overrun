# == Schema Information
#
# Table name: tags
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Tag < ApplicationRecord
  validates :title, presence: true, uniqueness: true

  has_many :taggings
  has_many :questions, through: :taggings
end
